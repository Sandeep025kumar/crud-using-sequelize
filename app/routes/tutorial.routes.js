const productController = require("../controller/tutorial.controller");
const router = require("express").Router();
  // Create a new Tutorial
router.post("/addProduct", productController.addProduct);

router.get("/getProduct", productController.getProduct);

router.get("/product/:id", productController.getOneProduct);

router.get("/getPublishedProduct", productController.getPublishedProduct);

router.put("/update/:id", productController.updateProduct);

router.delete("/remove/:id", productController.deleteProduct);

module.exports = router;