const express=require('express');

const{getCategories,
     getCategory,
     createCategories,
     updateCategory
    }=require('../services/categoryService')

const router=express.Router();


router.route('/').get(getCategories).post(createCategories);
router.route('/:id').get(getCategory);
router.route('/:id').put(updateCategory);



module.exports=router;