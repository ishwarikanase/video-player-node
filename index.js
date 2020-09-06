const express=require('express');
const body_parser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('./routes/routesIndex');
const cors=require('cors');

mongoose.Promise=global.Promise;

const app=express();
const port=3000;
const databaseURL='mongodb://localhost:27017/video-player';

app.use(cors());

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())
app.use('/api', routes);

mongoose.connect(databaseURL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},function(){}).then(()=>{
    console.log("successfully conneected to database.......");
}).catch(databaseConnectionError=>{
    console.log("error while connecting to database",databaseConnectionError.stack);
    process.exit(1);
});

app.listen(port,()=>{
    console.log("server is running on port "+port);
})



