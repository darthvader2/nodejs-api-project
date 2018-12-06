const express =require('express');
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message :'handling get request '
    });
});

router.post('/',(req,res,next)=> {
    res.status(200).json({
        message:'handling post request'
    });
});

router.patch('/:productID',(req,res,next)=>{
    const ID = req.params.productID;
    if (ID === 'special'){
        res.status(200).json({
            message : 'special id '
        });
    }
    else{
        res.status(200).json({
            message : 'patch of id '
        });
    };


});

router.delete('/:productID',(req,res,next)=>{
    const ID = req.params.productID;
    if (ID === 'special'){
        res.status(200).json({
            message : 'deleted id '
        });
    }
    else{
        res.status(200).json({
            message : 'out of id '
        });
    };

});
module.exports = router;