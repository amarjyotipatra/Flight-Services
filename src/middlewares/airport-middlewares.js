const { StatusCodes }=require('http-status-codes');
const { ErrorResponse }= require('../utils/common');
const { AppError } = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message='Something went wrong while creating name';
        ErrorResponse.error=new AppError(['Name not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.message='Something went wrong while creating code';
        ErrorResponse.error=new AppError(['Code not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.cityId){
        ErrorResponse.message='Something went wrong while creating cityId';
        ErrorResponse.error=new AppError(['cityId not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    next();
}

module.exports={validateCreateRequest}