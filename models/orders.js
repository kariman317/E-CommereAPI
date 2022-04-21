const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    date:{type:Date},
    productID:
      [
          {
             type:mongoose.SchemaTypes.ObjectId,
             ref:'Product'
             
          }
       ]    ,
    userID:
    {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required:true
    }
});

var ordersModel= mongoose.model('orders',orderSchema);

module.exports=ordersModel
