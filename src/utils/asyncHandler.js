const asyncHandler = (requestHandler) => {
  (res, req, next) => {
    Promise.resolve(requestHandler(res, req, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//higher order function
/* const asyncHandler = () => {};
const asyncHandler = (func) => {
  () => {};
};
const asyncHandler = (fnc) => () => {};
const asyncHandler = (fnc) => async () => {};  */

/* const asyncHandler = (fn) => async (res, req, next) => {
  try {
    await fn(res, req, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
}; */
