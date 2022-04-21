const mongoose = require('mongoose');
const { boolean} = require('boolean');

const userSchema=mongoose.Schema({
    Name:{
        type:String,
        minlength:3,
        maxlength:20,
        require:true

    },
    IsAdmin:
    {
        type:boolean,
        require:false
    },
        
    IsSeller:
    {
        type:boolean,
        require:false
    }
    /* products :
     [
        { 
            type:mongoose.SchemaTypes.ObjectId,
            ref:'Product'
        }
     ] */
     
});

var userModel= mongoose.model('User',userSchema);

module.exports=userModel



//userModel.create({Name:"hamada",IsAdmin:true})
