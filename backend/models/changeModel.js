// This is the schema to build each single change

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const changeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    changes : [{
        title : String,
        body : String
     }],
    date: {
        type: Date, 
        default: Date.now
    },
    likes: {
        type: Number
    },
}, { timestamps: true })


module.exports = mongoose.model('Change', changeSchema)