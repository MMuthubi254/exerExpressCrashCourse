const { lightgoldenrodyellow } = require('color-name');
const express = require ('express');
const path  = require ('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require( './Members');

const app = express();

//init midddleware
//app.use(logger);

//Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Homepage Route
app.get('/', (req, res)=>res.render('index', {
    title: 'Member App',
    members
})
);

//set a static folder
app.use(express.static(path.join(__dirname, 'Public')));

//Members API Route
app.use('/api/members', require('./routes/api/members'));

/* app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
    
}); */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started on port ${PORT}`)); 