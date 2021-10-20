const { model, Schema, Types } = require('mongoose')

const childSchema = new Schema({ name: "address" })

const schema = new Schema({
    username: {
        unique: true,
        required: true,
        type: String,
        minlength: 3,
        trim: true,
    },
    email: {
        unique: true,
        required: true,
        type: String,
        minlength: 5,
        trim: true,
    },
    first_name: {
        required: true,
        type: String,
        minlength: 3,
    },
    last_name: {
        required: true,
        type: String,
        minlength: 3,
    },
    password: {
        required: true,
        type: Number,
        minlength: 5
    },
    address: {
        required: true,
        type: [childSchema]
    }
}, { timestamps: true, collection: 'users' })

module.exports = { UserModel: model('User', schema) }