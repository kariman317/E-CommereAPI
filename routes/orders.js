const express = require("express");

var router = express.Router();
const {CreateOrder,findOrderByUserID,findOrderByDate,deleteOrder,Editorder}= require("../controllers/orders");



/*-------------   create new order --------------*/
router.post("/",async(req,res,next)=>{
    var body= req.body
    try{
      var newOrder = await CreateOrder(body)
      res.json(newOrder)
    }catch(err){
        res.status(422).json({ err });
    }
});


/*---------- Get order By userID-------------------*/
router.get("/:userID",async(req,res,next)=>{
      var {userID}=req.params
      
      var orders=await findOrderByUserID(userID)
      if(orders)
         res.status(201).json(orders);
      else
       res.json("the order is not found")   
});

/*------- Get order By Date -----------*/
router.get("/:date",async(req,res,next)=>{
    var {date}=req.params

    var orders=await findOrderByDate(date)

    if(orders)
         res.status(201).json(orders);
      else
       res.json("the order is not found")    
});

/*------------ Delete Order ------------------------*/
router.delete("/:id",(req,res,next)=>{
    var { id }=req.params
    deleteOrder(id).then(()=>{

        res.status(200).json({ message: "order deleted successfully" });

    }).catch((err)=>{

        res.status(422).json(err);
    })
});

/*----------------------- Update Order ----------------------------*/
router.patch("/:id",(req,res,next)=>{
    var {id} = req.params
    var {productID} = req.body
    Editorder(id,productID).then(()=>{

        res.status(200).json({ message: "order updated successfully" });
    }).catch((err)=>{
        res.status(422).json(err);
    })
});


module.exports = router;