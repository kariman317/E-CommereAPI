const express = require("express");

var app = express();
const cors=require("cors");
const mongoose=require("mongoose");

const http=require("http")

var server =http.createServer(app);


const userModel= require("./models/users")
const productModel= require("./models/products")
const orderModel=require("./models/orders")

app.use(express.json()); 

app.use(cors());
mongoose.connect("mongodb://localhost:27017/EcommerceWebsite",()=>{

  console.log("conected to db")

});

const productRoutes=require("./routes/products");
const ordersRoutes=require("./routes/orders");
const userRoutes=require("./routes/users");




 app.use("/products",productRoutes);
 app.use("/orders",ordersRoutes);
 app.use("/users",userRoutes); 

app.listen(4800, () => {
    console.log("app started listening on port 4800");
  });
  