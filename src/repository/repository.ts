import {type IComponent} from '../model/component'

export interface IRepository {
    saveComponent: (component: IComponent) => any;
    getComponents: () => Promise<IComponent[]>;
    isComponentExist: (name: string) => Promise<boolean>
    isAvailable: () => boolean
}
