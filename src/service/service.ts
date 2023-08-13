import {Junter} from '@junter.dev/junter-node'

import {type IComponent} from '../model/component'
import {type IRepository} from '../repository/repository'

interface IService {
    render: (content: string, aliases: string) => string
    registerComponent: (component: IComponent) => any
}

export class Service implements IService {
    private readonly junter: Junter
    private readonly db: IRepository

    constructor(db: IRepository, updateComponentsInterval: number) {
        this.junter = new Junter()
        this.db = db

        this.updateComponentsInInterval(updateComponentsInterval)
    }

    private updateComponentsInInterval(interval: number) {
        setInterval(() => {
            this.updateComponents()
        }, interval)
    }

    private updateComponents() {
        this.db.getComponents().then((components) => {
 components.forEach(component => {
            this.junter.registerComponent(component.name, JSON.parse(component.content), JSON.parse(component.aliases))
        })
}).catch((err) => {
            console.log(`Failed to update components ${err}`)
        })
    }

    render(content: string, aliases: string): string {
        try {
            return this.junter.render(JSON.parse(content), JSON.parse(aliases)).outerHTML
        } catch (e) {
            throw new Error(e)
        }
    }

    async registerComponent(component: IComponent) {
        try {
            if (await this.db.isComponentExist(component.name)) {
                throw new Error('component already exist')
            }

            this.junter.registerComponent(component.name, JSON.parse(component.content), JSON.parse(component.aliases))
            this.db.saveComponent(component)
        } catch (e) {
            throw new Error(e)
        }
    }
}
