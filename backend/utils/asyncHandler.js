/* 
This is an async error-handling wrapper or higher-order function (HOF) used with Express.
*/


export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);













/* 
"asyncHandler.js defines a higher-order function that wraps asynchronous Express route handlers and forwards rejected Promises to Express's error-handling middleware using next()."
*/