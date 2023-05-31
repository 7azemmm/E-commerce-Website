const express = require ('express');

const dotenv= require('dotenv');

const morgan= require('morgan');

dotenv.config({path:'config.env'});

const dbConection=require('./config/database');
const categoryRoute=require('./routes/categoryRoute');
const subCategoryRoute=require('./routes/subCategoryRoute');
const globalError= require('./middlewares/errorMiddleware');
const ApiError= require('./utils/apiError');
// connect with db

dbConection();


  
// express app
const app= express();

// middleware

app.use(express.json()); //parsing for the data 
if (process.env.NODE_ENV === 'development' ){

    app.use(morgan('dev'));  // logging for our api request ---- morgan is a  logger http request (middleware)
     console.log(`our enivronment mode is ${process.env.NODE_ENV}`);
}





// Mount Routes*********************

app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/subCategories',subCategoryRoute);
//if the request with a route that we do not have
// create error and send it to the global error handler 
app.all('*',(req,res,next)=>{
 
    //const err= new Error(`this route can not reachable: ${req.originalUrl}`);
    //next(err.message);
    next(new ApiError(`this route can not reachable: ${req.originalUrl}`,400));

});


// global error handling middleware
// middle ware to get any error occured and send it in form of json + error handling middleware
app.use(globalError);





const PORT=process.env.PORT || 8000 ;
app.listen(PORT, ()=>{
    console.log(`app is running succefully on port ${PORT} `);
});


// listen on any event make an error outside express
// handle rejection happens outside express that i can catch and handled it 


process.on('unhandledRejection',(err)=>
{
    console.error(`unHandledRejection error: ${err.name} | ${err.message}`)
    server.close(()=>{
        console.error(`application shutdown....`)
        process.exit(1); // requests to my server during pending so we need to close server then app

    });
     
});