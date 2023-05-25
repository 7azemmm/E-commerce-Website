const categoryModel= require('../models/categoryModel');
const slugify= require('slugify');
const asyncHandler = require('express-async-handler'); 

exports.getCategories=(req,res)=>{

    res.send();
    }

    exports.createCategories=asyncHandler(async(req,res)=>{
        const name=req.body.name;
        //use async await
        const category=await categoryModel.create({ name , slug:slugify(name)});
        res.status(201).json({data: category});
    
        
    });