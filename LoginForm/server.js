var express=require("express");
var app=express();
var path=require("path");
var bodyParser=require("body-parser");
// middle ware config
// var staticFolder=express.static(path.join(__dirname ,'public'));
// app.use(staticFolder);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>
{
    res.sendFile("public/login.html",{root:__dirname});
})

app.get("/login",(req,res)=>
{
    res.sendFile("public/hello.html",{root:__dirname})
})

app.get("/error",(req,res)=>
{
    res.sendFile("public/error.html",{root:__dirname})
})


app.post('/login',(req,res,next)=>
{
    if(req.body.username=="swanand"&& req.body.password=="swanand")
    {
        console.log("Login successfull");
        res.redirect("/login");
    }
    else
    {
        console.log("Login Failed");
        res.redirect("/error");
    }
})



app.listen(4000);
console.log("server is listening on 4000 port");