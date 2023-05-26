const express=require('express');

const{getCategories,
     getCategory,
     createCategories,
    }=require('../services/categoryService')

const router=express.Router();


router.route('/').get(getCategories).post(createCategories);
router.route('/:id').get(getCategory);



module.exports=router;