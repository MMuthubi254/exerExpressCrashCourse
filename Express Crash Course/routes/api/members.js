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

    if (!newMember.name || !newMember.email){
        res.status(400).json({msg: 'please include a name and email'});
    }

    members.push(newMember);
    res.json(members);
    //res.redirect('/');

});

//update Member
router.put('/:id', (req, res)=> {
    const found = members.some(member => member.id ===parseInt(req.params.id));
    if(found) {
       const updMember = req.body;
       members.forEach(member =>{
        if(member.id === parseInt(req.params.id)){
            member.name = updMember.name ? updMember.name : member.name;
            member.email = updMember.email ? updMember.email : member.email;

            res.json({msg: 'Member updated', member });
            }

       });
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});

//Delete Memmber
router.delete('/:id', (req, res)=> {
    const found = members.some(member => member.id ===parseInt(req.params.id));
    if(found) {
        res.json({msg:'Member deleted', members:members.filter(member =>member.id !== parseInt(req.params.id))
    });
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});

module.exports = router;


