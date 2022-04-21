const ordersModel = require("../models/orders");

function CreateOrder(order)
{
   var newOrder = ordersModel.create(order)
   return newOrder
}
function findOrderByUserID(userId)
{
    var orders=ordersModel.find({userID:userId}).populate("productID")
    
    return orders
}
function findOrderByDate(Date)
{
    var orders=ordersModel.find({date:Date}).populate("productID")
    return orders
}
function deleteOrder(id)
{
    var deleteOrder=ordersModel.findByIdAndDelete({_id:id});
    return deleteOrder;
}
function Editorder(id , p)
{
   var orders= ordersModel.findByIdAndUpdate({_id:id},{productID:p})
   return orders
} 
module.exports={CreateOrder,findOrderByUserID,findOrderByDate,deleteOrder,Editorder}