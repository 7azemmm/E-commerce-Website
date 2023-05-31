const express=require('express');

const{getCategories,
     getCategory,
     createCategories,
     updateCategory,
     deleteCategory
    }=require('../services/categoryService')

const router=express.Router();

const subCategoryRoute= require('./subCategoryRoute');

router.use('/:categoryId/subcategories',subCategoryRoute);


router.route('/').get(getCategories).post(createCategories);
router.route('/:id').get(getCategory);
router.route('/:id').put(updateCategory);
router.route('/:id').delete(deleteCategory);



module.exports=router;