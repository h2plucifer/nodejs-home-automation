const express=require('express'),
      path=require('path'),
      ejs=require('ejs'),
      bodyParser=require('body-parser'),
      mongoose=require('mongoose'),
      logger=require('morgan')
      dbURL=require('./configuration/dbConfig')
      Devices=require('./model/device')

const app=express();
const PORT=process.env.PORT||8080;

//MongoDB connection
mongoose.connect(dbURL,{useNewUrlParser:true});
const db=mongoose.connection;
if(!db)console.log("Error while connecting DB ...")
else console.log("Server connected to DB "+Object.keys(db));

//{name:'deviceLight', type:"light"  ,status:true ,  value:50 },

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('combined'));
app.set('views',path.join(__dirname,"views"));
app.set('view engine',"ejs");


app.get('/',(req,res)=>{
    Devices.find({},(err,data)=>{
        res.render("index",{devices:data}) 
})
})


app.listen(PORT,()=>console.log(`Server listening at port ${PORT}`));