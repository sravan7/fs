const express = require("express");
const app =  express();
const port = 3000;

app.get("/",(req,res)=>{

res.send("hello world from node");
})

app.listen(port, (err)=>{
if(err){
console.log(err)
}

console.log(`listening on ${port}`)
})
