//import
var express = require('express')
require('./connection')
const user = require('./model/user')
const userModel = require('./model/user')

//Initialise
var app = express()

//middleware
app.use(express.json())

//Api
app.get('/' , (req,res)=>{
    res.send('Hello')
})

app.get('/Login' , (req,res)=>{
    res.send('Loged in succesfully')
})

app.post('/Login' , async(req,res) =>{
    try {
        console.log(req.body);
        await user(req.body).save()
        res.send({message:"data added succesfully"})
        
    } catch (error) {
        console.log(error)
    }})

// delete a user

app.delete('/Login/:id' , async(req,res) =>{
    console.log("del")
        try {
            console.log(req.params.id)
            await user.findByIdAndDelete(req.params.id)
            res.send({message:"data deleted succesfully"}) 
        } catch (error) {
            console.log("error")
        }
    })

//update a user

app.put('/Login/:id' , async(req,res) =>{
    try {  
        var data = await user.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:'updated',data})
    } catch (error) {
        console.log(error)
    }
})

//Port allocaton
app.listen(3000, function(){
    console.log('Server is running on port 3000')
})