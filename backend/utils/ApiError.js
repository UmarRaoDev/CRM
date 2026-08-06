/* 
This is called custom error handling or a custom error class. It is commonly used in backend applications to create standardized API errors.
*/


export class piError extends Error {
  constructor(statusCode, message){
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace?.(this, this.constructor);
  }
}


/* 
ApiError.js defines a custom error class that extends JavaScript's built-in Error class, adding an HTTP status code and operational-error flag to standardize error handling across the backend API.
*/