const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('static',express.static('static')); //-FOR SERVING STATIC FILES
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view-engine','pug');// SET THE TEMPLATE ENGINE AS PUG
app.set('views',path.join(__dirname,'views')); //SET THE VIEWS DIRECTORY

//END-POINTS
app.get('/',(req,res)=>{

    const params={};
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
})
//SERVER-RUN
app.listen(port,()=>{
    console.log("application has succesfully started");
})