const express = require ('express');
const path  = require ('path');


const app = express();

//set a static folder
app.use(express.static(path.join(__dirname, 'Public')));

/* app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
    
}); */
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started on port ${PORT}`)); 