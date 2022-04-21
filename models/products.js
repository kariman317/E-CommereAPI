const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    Name:{
        type:String,
        minlength:2,
        maxlength:15,
        required:true,
       /*  trim:true,
        match:[/^[A-Za-z0-9]+$/] */
    },
    Description:{
        type:String
    },
    Photo:{
        type:String,

    },
    UserId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    CreationDate:{
        type:Date,
        default: Date.now,
    }
});
var productModel= mongoose.model('Product',productSchema);

module.exports=productModel
