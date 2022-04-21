const match = require("nodemon/lib/monitor/match");
const productModel = require("../models/products");
const userModel = require("../models/users");

function AllProducts() {
  var products = productModel.find({}).populate("UserId");
  return products;
}

function findProductByName(name) {
    var productname = productModel.findOne({ Name: name });
    return productname;
}

function findbySellerName(username){
    var user=userModel.find({Name:username})
   /*  return user._id; */
   console.log(user);
    var sellerproduct=productModel.find({UserId:user._id})
    return sellerproduct;
}
/* function findbySellerName(sellername) 
{
  Sellerproduct=productModel.find({}).populate({path:'UserId',select:Name}
  ,match({Name:sellername}))
}  */
  function CreateProduct(product){

    var newproduct= productModel.create(product);
    /* var userid=userModel.findById({UserId:newproduct.UserId})
    userid.products.push(newproduct) */
    return newproduct;
  
  }  
function Deleteproduct(id)
  {
    var deleteproduct=productModel.findByIdAndDelete({_id:id});
    return deleteproduct;
  } 
function EditProduct(id,Name) {
    var editproduct = productModel.findByIdAndUpdate({_id:id},{Name:Name});
    return editproduct;
  }  
   
module.exports = {AllProducts,findProductByName,Deleteproduct,EditProduct,CreateProduct,findbySellerName};