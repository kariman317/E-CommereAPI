const userModel=require('../models/users')

function findSellerByName(name) {
    var user = userModel.find({ Name: name });
    return user;
}
function CreateUser(user)
{
   var newUser = userModel.create(user)
   return newUser
}
function deleteUser(id)
{
    var deleteUser=userModel.findByIdAndDelete({_id:id});
    return deleteUser;
}
function EditUser(id,name) {
  var edituser = userModel.findOneAndUpdate({ _id: id }, { Name: name });
  return edituser;
}  
function findUserById(id) {
  var userId = userModel.findOne({ _id: id });
  return userId;
}
function getAllUsers() {
  var users = userModel.find({});
  return users;
}

module.exports = {findSellerByName,CreateUser,deleteUser,EditUser,findUserById,getAllUsers};
  
