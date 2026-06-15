require('dotenv').config({path:'../.env'});

const mongoose=require("mongoose");
const Post = require("../Models/post");
const initdata=require("./data.js");
const dburl=process.env.ATLASDB_URL;
main().then(()=>{
    console.log("connected to DB");
    initDB();
}).catch((err)=>{
    console.log(err);
})

async function main(){
    console.log(dburl);
    await mongoose.connect(dburl);
}

const initDB=async()=>{
    await Post.deleteMany({});
    await Post.insertMany(initdata.data);
    console.log("data was initalized");
}

