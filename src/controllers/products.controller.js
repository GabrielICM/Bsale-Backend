const dataModel = require('../models/products.model');

function getProducts(req,res){
    dataModel.getProducts((data,error) =>{
    res.json(data);
    })
}

function getFilterProducts(req,res){
    const {search}  = req.params;
    
    dataModel.getFilterProducts(search,(data,error) =>{
        res.json(data);
    })
}

module.exports = {
    getProducts,
    getFilterProducts
}