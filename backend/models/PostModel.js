// title
// image
// description
// user
// likes
// comments
// shares
// createdAt
const {Schema, model} = require("../connection")
const mySchema = new Schema({
    title:String,
    image:String,
    description:{type:String, default:"No description"},
    user:String,
    likes:Number,
    comments:{type:Number, default:0},
    shares:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now},
});
module.exports= model('post', mySchema);