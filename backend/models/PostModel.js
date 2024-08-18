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
    image:{type:String, default:null},
    description:{type:String, default:"No description"},
    user:String,
    likes:{type:Number, default:0},
    comments:{type:Number, default:0},
    shares:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now},
});
module.exports= model('post', mySchema);