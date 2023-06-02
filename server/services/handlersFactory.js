const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const ApiFeatures = require('../utils/apiFeatures');

// Delete one document by ID
exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);

    if (!document) {
      // If no document found, return an error
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    res.status(204).send();
  });

// Update one document by ID
exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!document) {
      
      return next(new ApiError(`No document for this id ${req.params.id}`, 404));
    }
    res.status(200).json({ data: document });
  });

// Create a new document
exports.createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });

// Get one document by ID
exports.getOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findById(id);

    if (!document) {
      
      return next(new ApiError(`No document for this id ${id}`, 404));
    }
    res.status(200).json({ data: document });
  });

// Get all documents
exports.getAll = (Model, modelName = '') =>
  asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
      filter = req.filterObj;
    }

    // Count total number of documents
    const documentsCounts = await Model.countDocuments();

    // Create an instance of ApiFeatures to build and execute the query
    const apiFeatures = new ApiFeatures(Model.find(filter), req.query)
      .paginate(documentsCounts) // Apply pagination
      .filter() // Apply filtering
      .search(modelName) // Apply search
      .limitFields() // Limit fields
      .sort(); // Sort results

    // Execute the query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents = await mongooseQuery;

    res.status(200).json({
      results: documents.length,
      paginationResult,
      data: documents,
    });
  });
