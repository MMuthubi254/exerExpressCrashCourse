const express = require('express');
const uuid = require ('uuid');
const { Module } = require('module');
const router = express.Router();
const members = require('../../Members');


//Get all members
router.get('/', (req, res)=>res.join(members));

//Get a single member
router.get('/:id', (req, res)=> {
    const found = members.some(member => member.id ===parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member =>member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});

//create member
router.post('/', (req, res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        status: 'active'
    }
    
});

module.exports = router;


