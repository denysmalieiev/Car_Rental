const express = require('express')
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res)=>{
    return res.send('Welcome')
})

app.get('*', (req, res)=>{
    return res.send('Something went wrong')
})

const server = app.listen(5000, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Yep! Server up and running at Port: ${5000}...`)
})