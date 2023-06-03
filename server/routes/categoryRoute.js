const express=require('express');

const{getCategories,
     getCategory,
     createCategories,
     uploadCategoryImage,
  resizeImage,
    }=require('../services/categoryService')

    const{
        getCategoryValidator,
        createCategoryValidator
       }=require('../utils/validators/categoryValidator')

const router=express.Router();

const subCategoryRoute= require('./subCategoryRoute');

router.use('/:categoryId/subcategories',subCategoryRoute);
router.route('/').get(getCategories).post(uploadCategoryImage,
    resizeImage,createCategoryValidator,createCategories);
router.route('/:id').get(getCategoryValidator,getCategory);

module.exports=router;