const { model, Schema, Types } = require('mongoose')

const childSchema = new Schema({ name: "string" })

const schema = new Schema({
    name: {
        required: true,
        type: String,
    },
    sku: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    slug: {
        required: true,
        type: String,
    },
    details: {
        required: true,
        type: Object,
    },
    total_reviews: {
        required: true,
        type: Number,
    },
    price: {
        required: true,
        type: Number,
    },
    category: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    tags: {
        required: true,
        type: [childSchema]
    }
}, { timestamps: true, collection: 'products' })

module.exports = { ProductModel: model('Product', schema) }