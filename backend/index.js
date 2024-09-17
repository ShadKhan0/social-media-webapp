const express = require('express');
const PostRouter = require('./routers/PostRouter');
const UserRouter = require('./routers/UserRouter');
const CommunityRouter = require('./routers/CommunityRouter')

const app =express();
const cors = require('cors');
const port =5000;
//middleware
app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb', extended:true}));
app.use("/user", UserRouter )
app.use("/post", PostRouter);
app.use("/community" , CommunityRouter);



app.listen(port, (err) =>{
    if(err){
        console.log("failed"+err);
    }
    else{
        console.log("Server started");
    }
})