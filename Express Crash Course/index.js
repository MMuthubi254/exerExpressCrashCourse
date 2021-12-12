const { lightgoldenrodyellow } = require('color-name');
const express = require ('express');
const path  = require ('path');
const logger = require('./middleware/logger');


const app = express();

//init midddleware
//app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//set a static folder
app.use(express.static(path.join(__dirname, 'Public')));

//Members API Route
app.use('/api/members', require('./routes/api/members'));

/* app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
    
}); */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started on port ${PORT}`)); 