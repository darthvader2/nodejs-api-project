const express= require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'from orders route'
    });
});

router.post('/:ordersId',(req,res,next)=>{
    const Id = req.params.ordersId;
    if (Id === '123'){
        res.status(200).json({
            message : Id
        });
    }
    else {
        res.status(200).json({
            message :'is is not equal '
        });
    }
});


module.exports = router ;