// import
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://diyaelfadhilph:diyaelfadhil@cluster0.eksxjnx.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to database')
})
.catch((error)=>{
    console.log(error)
    console.log('Connection failed')
})