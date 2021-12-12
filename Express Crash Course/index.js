const { lightgoldenrodyellow } = require('color-name');
const express = require ('express');
const path  = require ('path');
const members = require('./Members');


const app = express();

const logger = (req, res, next) =>{
    console.log(`${req.protocol}://${req.get('host')}${res.originalUrl}`);
    next();
};

//init midddleware
app.use(logger);


//Get all members
app.get('/api/members', (req, res)=>res.join(members));


//set a static folder
app.use(express.static(path.join(__dirname, 'Public')));

/* app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
    
}); */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started on port ${PORT}`)); 