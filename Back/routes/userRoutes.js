const { Router } = require('express')
const express = require('express')
const router=express.Router()
const User=require('../models/user')

// GET :  RETURN ALL USERS 
router.get("/users",(req,res)=>{
    User.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})

//POST :  ADD A NEW USER TO THE DATABASE
router.post('/adduser',(req,res)=>{
    const {fistName,lastName,address,phoneNumber}=req.body
    const newuser = new User({fistName,lastName,address,phoneNumber})
    newuser.save() .then((user)=>res.send(user)) .catch ((err)=>res.status(404).send({msg:"cannot add user"}))

})

//PUT : EDIT A USER BY ID
router.put("/updateuser/:id",(req,res)=>{
    let userId=req.params.id
    User.findById(userId)
    .then
    User.findByIdAndUpdate(userId,{$set:{...req.body}},(err,res)=>{
        if(err){throw err}
        else{res.save()}
    })
    .then((userupdated)=>res.send(userupdated))
})

//DELETE : REMOVE A USER BY ID 
router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(404).json({msg:"ERROR ID not valid"})
        }else{
            res.status(200).json({msg:"user deleted"})
        }
    })
    .catch((err)=>{res.status(400).send(err)})
})

module.exports=Router