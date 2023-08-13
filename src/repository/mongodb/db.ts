import * as Mongoose from 'mongoose'

import {type IComponent} from '../../model/component'
import {type IRepository} from '../repository'

import {ComponentScheme} from './scheme'

export class MongoDB implements IRepository {
    private conn: Mongoose.Connection

    private componentModel: Mongoose.Model<IComponent>

    constructor(connectURL: string) {
        this.connect(connectURL)
    }

    private connect(connectURL: string) {
        this.conn = Mongoose.createConnection(connectURL)

        this.conn.on('error', (err) => {
            console.log(`Failed to connect. Error: ${err}`)

            process.exit(1)
        })

        this.conn.on('open', () => {
            this.initModels()
        })
    }

    private initModels() {
        this.componentModel = this.conn.model<IComponent>('Component', ComponentScheme)
    }

    public close() {
        this.conn.close().catch((e) => {
            throw new Error(e)
        })
    }

    public async getComponents(): Promise<IComponent[]> {
        return await this.componentModel.find({})
    }

    public saveComponent(component: IComponent) {
        new this.componentModel({
            name: component.name,
            content: component.content,
            aliases: component.aliases
        }).save().catch((e) => {
            throw new Error(e)
        })
    }

    public async isComponentExist(name: string): Promise<boolean> {
        const data: IComponent = await this.componentModel.findOne({
            name
        })

        return Boolean(data)
    }

    public isAvailable(): boolean {
        return this.conn.readyState == Mongoose.STATES.connected
    }
}
