const express=require('express');

const{getCategories,
     getCategory,
     createCategories
    }=require('../services/categoryService')

    const{
        getCategoryValidator,
        createCategoryValidator
       }=require('../utils/validators/categoryValidator')

const router=express.Router();

const subCategoryRoute= require('./subCategoryRoute');

router.use('/:categoryId/subcategories',subCategoryRoute);
router.route('/').get(getCategories).post(createCategoryValidator,createCategories);
router.route('/:id').get(getCategoryValidator,getCategory);

module.exports=router;