const express = require("express");

var router = express.Router();
const {findSellerByName,CreateUser,deleteUser,EditUser,findUserById,getAllUsers}= require("../controllers/users");


router.get("/", async (req, res, next) => {
    var users = await getAllUsers();
    if (users) {
      res.json(users);
    } else {
      res.json({ message: "users not found" });
    }
  });

/*-------------   create new user --------------*/

router.post("/",async(req,res,next)=>{
    var body= req.body
    console.log(body);
    try{
      var newUser = await CreateUser(body)
      res.json(newUser)
    }catch(err){
        res.status(422).json({ err });
    }
});

/*---------- Get user By ID-------------------*/
router.get("/:id",async(req,res,next)=>{
    var {id}=req.params
    
    var user=await findUserById(id)
    if(user)
       res.status(201).json(user);
    else
     res.json("the user is not found")   
});

/*------------ Delete user ------------------------*/
router.delete("/:id",(req,res,next)=>{
    var { id }=req.params
    deleteUser(id).then(()=>{

        res.status(200).json({ message: "user deleted successfully" });

    }).catch((err)=>{

        res.status(422).json(err);
    })
});

/*---------- Get Seller By Name-------------------*/
router.get("/:name",async(req,res,next)=>{
    var {name}=req.params
    
    var username=await findSellerByName(name)
    if(user)
       res.status(201).json(username);
    else
     res.json("the user is not found")   
});
/*----------------------- Update User ----------------------------*/
router.patch("/:id",(req,res,next)=>{
    var {id} = req.params
    var {productID} = req.body
    EditUser(id,productID).then(()=>{

        res.status(200).json({ message: "order updated successfully" });
    }).catch((err)=>{
        res.status(422).json(err);
    })
});


module.exports = router;


