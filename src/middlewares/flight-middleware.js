const { StatusCodes }=require('http-status-codes');
const { ErrorResponse }= require('../utils/common');
const { AppError } = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message='Something went wrong while creating flightNumber';
        ErrorResponse.error=new AppError(['flightNumber not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.airplaneId){
        ErrorResponse.message='Something went wrong while creating airplaneId';
        ErrorResponse.error=new AppError(['airplaneId not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message='Something went wrong while creating departureAirportId';
        ErrorResponse.error=new AppError(['departureAirportId not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message='Something went wrong while creating arrivalAirportId';
        ErrorResponse.error=new AppError(['arrivalAirportId not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message='Something went wrong while creating departureAirportId';
        ErrorResponse.error=new AppError(['departureAirportId not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message='Something went wrong while creating arrivalTime';
        ErrorResponse.error=new AppError(['arrivalTime not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.departureTime){
        ErrorResponse.message='Something went wrong while creating departureTime';
        ErrorResponse.error=new AppError(['departureTime not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.price){
        ErrorResponse.message='Something went wrong while creating price';
        ErrorResponse.error=new AppError(['price not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    if(!req.body.totalSeats){
        ErrorResponse.message='Something went wrong while creating totalSeats';
        ErrorResponse.error=new AppError(['totalSeats not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    
    next();
}

async function validateUpdateSeatsRequest(req,res,next){
    if(!req.body.seats){
        ErrorResponse.message='Something went wrong while updating Seats';
        ErrorResponse.error=new AppError(['seats not found in the incoming request in correct format'],StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse)
    }
    next();
}

module.exports={validateCreateRequest,validateUpdateSeatsRequest}