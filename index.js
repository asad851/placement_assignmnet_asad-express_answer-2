const express = require('express')
const app=express()
const isAuthenticated = (req,res,next)=>{
    const isAuthenticated = "logged in"
    if(isAuthenticated){
        
        next()
    }else{
        res.status(401).json({error:'Unauthorized'})
    }
}
app.get('/post',isAuthenticated,(req,res)=>{
    const posts =[
       {id:1, title:"post1"},
       {id:1, title:"post2"},
    ]
    res.json(posts)
})
