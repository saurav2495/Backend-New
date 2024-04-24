// now we make a higher order function let see how it makes

// here we make a promise code

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next).catch((err) => next(err)));
  };
};

export { asyncHandler };

// const asyncHandler = (fn)=> async(req,res,next) =>{ // this is a try catch code
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.statu(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }// in middleware we use the next
