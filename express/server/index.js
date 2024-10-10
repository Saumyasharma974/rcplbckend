const express=require("express");
const app=express();

//  app.use("/namste",(req,res)=>{
//      res.send('<P>Hello World!</p>');
//  });
//  app.use("/namste/ram",(req,res)=>{
//     res.send('<h1>Hello ram</h1>');
// });
app.get("/namste",(req,res)=>{
    res.send('<P>Hello</P>');
})
app.get("/dog",(req,res)=>{
    res.send('<h1>Dog</h1>');
})
app.get("/lion",(req,res)=>{
    res.send('<h1>tiger</h1>');
})
app.get("/cat",(req,res)=>{
    res.send('<h1>Dog</h1>');
})
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});