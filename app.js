const express=require("express");
const bodyParser=require("body-parser");

const app=express();
var items=["HTML","CSS","Java-Script"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/", function(req,res){
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);

     res.render("list",{DayOfTheWeek:day,newItem:items});
    
});

app.post("/",function(req,res){
   var item= req.body.myText;
   items.push(item);
    res.redirect("/");
})
app.listen(3000,function(){
    console.log("started port 3000 and listening");
});