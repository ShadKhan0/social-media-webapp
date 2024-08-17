// title
// image
// description
// createdAt
const {Schema, model}= require('../connection')
const mySchema = new Schema({
    title:String,
    image:String,
    description:{type:String, default:"No description"},
    createdAt:{type:Date, default:Date.now},
})

module.exports = model('community',mySchema);