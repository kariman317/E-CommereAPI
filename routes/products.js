const express = require("express");
const req = require("express/lib/request");
var router = express.Router();


const {
  AllProducts,
  findProductByName,
  Deleteproduct,
  EditProduct,
  CreateProduct,
  findbySellerName
} = require("../controllers/products");
const { findById } = require("../models/products");
/* -------------------- Get All Products--------------------- */
router.get("/", async (req, res, next) => {
  var products = await AllProducts();
  if (products) {
    res.json(products);
  } else {
    res.json({ message: "products not found" });
  }
});

/* --------------------Get Product By Name--------------------- */

/* router.get("/:name", async (req, res, next) => {
  var { name } = req.params;

  var productName = await findProductByName(name);
 
  res.status(201).json(productName);
}); */
/* --------------------Get Product By Seller Name --------------------- */
router.get("/:name", async (req, res, next) => {
  var { name } = req.params;
  var productsname = await findbySellerName(name);
 
  res.status(201).json(productsname);
});


/* --------------------Edit product Name --------------------- */

router.patch("/:id", (req, res, next) => {
  var { id } = req.params;
  var { Name } = req.body;
 

  EditProduct(id,Name)
    .then(() => {
      res.status(200).json({ message:"product updated successfully" });
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});
/* --------------------Create New Product--------------------- */
router.post("/", async (req, res, next) => {
  var body = req.body;
  try {
    var newproduct = await CreateProduct(body);
    res.json(newproduct);
  } catch (err) {
    res.status(422).json({err});
  }
});
/* --------------------Delete Product--------------------- */

 
router.delete("/:id",async(req, res, next) => {
  var { id } = req.params;
  Deleteproduct(id)
  .then(() => {
    res.status(200).json({ message: "product is deleted " });
  })
  .catch((err) => {
    res.status(422).json(err);
  });
}); 

 module.exports = router;

 
 