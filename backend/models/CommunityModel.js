// title
// image
// description
// createdAt
const {Schema, model}= require('../connection')
const mySchema = new Schema({
    title:String,
    image:{type:String, default:null},
    description:{type:String, default:"No description"},
    createdAt:{type:Date, default:Date.now},
})

module.exports = model('community',mySchema);