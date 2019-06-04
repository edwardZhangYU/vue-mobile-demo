const express = require('express')
const app = express()

app.use('*',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*');
})


app.listen(5555,()=>{
    console.log('server is listen at port 5555')
})