// var mysql=require("mysql");
// var con=mysql.createConnection(
//     {
//         host:"localhost",
//         user:"root",
//         password:"swanand@123",
//         database:"express"

//     });

// // con.connect(function(err)
// // {
// //     if(err) throw err;

// //     console.log("connected");

// //     con.query("create database express",(err,result)=>
// //     {
// //         if(err) throw err;
// //         console.log("Database created");
// //     })
// // });

// con.connect(function(err)
// {
//     if(err) throw err;
    
//     console.log("connected");
//     var sql="create table credentials(email varchar(30) PRIMARY KEY,password varchar(35))";
//     con.query(sql,(err,result)=>
//     {
//         if(err) throw err;

//         console.log("Table created");
//     })
// });