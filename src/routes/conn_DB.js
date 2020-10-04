const { Table_1 } = require('../dB.js')

let route=require('express').Router()

let user=require('../db.js').Table_1

route.get('/pathname',(req,res)=>{
   user.findAll() // to get all data from database used Promises
    .then((results)=>{  // If succeded go to then
         res.status(200).send(results)
    })
    .catch((err)=>{ // If failed go to catch
        res.status(400).send({
            error: "Error to connect Database"
        })
})
})

route.post('/user',(req,res)=>{ // to add new row 
    user.create({
        name:req.body.name
    }).then((results)=>{ // run when row succesfully added in the table
      res.status(200).send(results)
    })
    .catch((err)=>{ // when failed to add 
        res.status(400).send({
            error: "Error to connect Database"
        })
})
})

exports=module.exports={
    route
}
