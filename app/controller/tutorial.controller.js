const db = require("../models");
const Product = db.products;


const addProduct = async(req,res)=>{
  let info ={
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    published:req.body.published ? req.body.published:false
  }

  const product = await Product.create(info)
  res.status(200).send(product)
}

const getProduct = async(req,res)=>{
  let products = await Product.findAll({})
  res.status(200).send(products)
}
const getOneProduct = async(req,res)=>{
  let id = await req.params.id
  let products = await Product.findOne({ where:{id:id}})
  res.status(200).send(products)
}
const updateProduct = async(req,res)=>{
  let id = await req.params.id
  let products = await Product.update(req.body,{ where:{id:id}})
  res.status(200).send(products)
}
const deleteProduct = async(req,res)=>{
  let id = await req.params.id
  await Product.destroy({where:{id:id}})
  res.status(200).send('product is deleted')
}
const getPublishedProduct = async(req,res)=>{
  let id = await req.params.id
  const data=await Product.findAll({ where:{published:true}})
  res.status(200).send(data)
}
module.exports = {
  addProduct,
  getProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct
}