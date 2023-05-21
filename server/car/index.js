const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    return res.status(200).json({
        status: true,
        message: 'Successful'
    })
})

app.get('*', (req, res)=>{
    return res.status(200).json({
        status: true,
        message: 'Successful'
    })
})

const server = app.listen(4002, (err)=>{
    if(err){
        console.log(err)
    } 
    console.log(`Server up and running at port 4002...`)
})