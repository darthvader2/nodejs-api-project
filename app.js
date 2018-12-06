const express= require('express');
const app = express();
const morgan = require('morgan');

//Required routing files in routes directory. 
const productsRoutes= require('./routes/products');
const orderRoutes = require('./routes/orders');

//To handle console logging. 
app.use(morgan('dev'));

//Routing to handle requests. 
app.use('/products',productsRoutes);
app.use('/orders',orderRoutes);

//Error Handling middleware
app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status=404;
    next(error);

});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
        message : error.message
        }
    })

});



module.exports=app;
