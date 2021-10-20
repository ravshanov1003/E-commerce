const { model, Schema, Types } = require('mongoose')


const schema = new Schema({
    product_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    text: {
        required: true,
        type: String,
    },
    rating: {
        required: true,
        type: Number,
    },
    user_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        required: true,
        type: String,
    },
    voter_ids: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true, collection: 'review' })

module.exports = { ReviewModel: model('Review', schema) }