import Mongoose from 'mongoose'

import {type IComponent} from '../../model/component'

export const ComponentScheme = new Mongoose.Schema<IComponent>({
    name: {type: 'String', required: true, unique: true, index: true},
    content: {type: 'String', required: true},
    aliases: {type: 'String', required: true}
})
