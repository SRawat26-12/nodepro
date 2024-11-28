const ProductModel=require("../models/productModel");


const productSave=async(req, res)=>{
 const {name, description, category, price, image}= req.body;
 
 const Product= await ProductModel.create({
    name:name,
    description:description, 
    category: category,
    price:price, 
    image: image
 })
 res.send(Product);
}

const showProduct=async(req, res)=>{

   const data= await ProductModel.find();
    res.send(data);
}

const productDetail=async(req, res)=>{
    const Data= await ProductModel.findById(req.body.id) ;   
    res.send(Data);
}

const menProductDetail=async(req, res)=>{
    const {category}= req.query;
    const Data= await ProductModel.find({category:category});
    res.send(Data)
}

const searchProduct=async(req, res)=>{
   let proname= req.query.product;
   console.log(proname);
   const Data= await ProductModel.find({"name":{$regex:proname, $options: 'i'}})
   res.send(Data);
}
const shopProduct=async(req, res)=>{
    const {lprice, hprice, cakecat, saladcat, pizzacat }=req.body;
    console.log(lprice, hprice, cakecat, saladcat, pizzacat);
 
    const Data= await ProductModel.find({$and:[{price:{$gte:lprice}}, {price:{$lte:hprice}}, {$or:[{"category":cakecat}, {"category":saladcat}, {"category":pizzacat}]}   ]});
    console.log(Data);
    res.send(Data);
 }

module.exports={
    productSave,
    showProduct,
    productDetail,
    menProductDetail,
    searchProduct,
    shopProduct
}