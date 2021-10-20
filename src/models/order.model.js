const { model, Schema, Types } = require('mongoose')


const schema = new Schema({
    user_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    line_items: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    shipping_address: {
        required: true,
        type: Object,
    },
    sub_total: {
        required: true,
        type: Number,
    },
}, { timestamps: true, collection: 'order' })

module.exports = { OrderModel: model('Order', schema) }