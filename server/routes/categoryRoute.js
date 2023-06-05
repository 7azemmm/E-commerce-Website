const express = require('express');

const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require('../utils/validators/categoryValidators');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  uploadCategoryImage,
  resizeImage,
} = require('../services/categoryService');

const authService = require('../services/authService');

const subcategoryRoute = require('./subCategoryRoute');

const router = express.Router();

router.use('/:categoryId/subcategories', subcategoryRoute);

router
  .route('/')
  .get(getCategories)
  .post(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadCategoryImage,
    resizeImage,
    createCategoryValidator,
    createCategory
  );
router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(
    authService.protect,
    authService.allowedTo('admin', 'manager'),
    uploadCategoryImage,
    resizeImage,
    /*updateCategoryValidator,*/
    updateCategory
  )
  .delete(
    authService.protect,
    authService.allowedTo('admin'),
    deleteCategoryValidator,
    deleteCategory
  );

module.exports = router;