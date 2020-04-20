const express=require('express'),
      path=require('path'),
      ejs=require('ejs'),
      bodyParser=require('body-parser'),
      mongoose=require('mongoose'),
      logger=require('morgan')

const app=express();
const PORT=process.env.PORT||8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('combined'));
app.set('views',path.join(__dirname,"views"));
app.set('view engine',"ejs");


app.get('/',(req,res)=>{
    res.send("Welcome To Home Automation");
})

app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`));