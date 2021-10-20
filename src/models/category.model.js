const { model, Schema, Types } = require('mongoose')

const schema = new Schema({
    name: {
        required: true,
        type: String,
    },
    slug: {
        required: true,
        type: String,
    },
    parent_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: {
        required: true,
        type: String,
    },
}, { timestamps: true, collection: 'category' })

module.exports = { CategoryModel: model('Category', schema) }