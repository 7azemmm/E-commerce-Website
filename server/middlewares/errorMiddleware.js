const ApiError = require('../utils/apiError');//require APIerror class that deal with expected errors

const sendErrorForDev = (err, res) => //this function send the error in details as it is  important in development mode
  res.status(err.statusCode).json({
    status: err.status,//the error status
    error: err,
    message: err.message,//the error message
    stack: err.stack,//where is the error
  });

const sendErrorForProd = (err, res) => //send the error with only status code and message as we dont need details in production mode
  res.status(err.statusCode).json({ // i need only statuse code and error message
    status: err.status,
    message: err.message,
  });

const globalError = (err, req, res, next) => {//global error middleware that handles express errors 
  err.statusCode = err.statusCode || 500; //if it has status code ok else it's 500
  err.status = err.status || 'error';//if it has error status ok else it is  "error" 
  if (process.env.NODE_ENV === 'development') { //check if we are in the devolpment mode use this function
    sendErrorForDev(err, res);
  } else {
    
    sendErrorForProd(err, res);//calling this function as we are in production mode
  }
};

module.exports = globalError;
