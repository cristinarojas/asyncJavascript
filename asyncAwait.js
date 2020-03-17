/**
  :ASYNC/AWAIT:
  The word “async” before a function means
  one simple thing: a function always returns a promise.

  async ensures that the function returns a promise
**/
async function myFunction () {
  return 1;
}

// -----> Promise {<resolved>: 1}
console.log("----->", myFunction());

/** We could explicitly return a promise, which would be the same: **/
async function myFunctionTwo() {
  return Promise.resolve(1);
}

myFunctionTwo().then(alert);

// like this...
async function tryCoupon(coupon = '') {
    return new Promise((resolve) => {

    }
  )
}

/* Await, that works only inside async functions */
// await makes JavaScript wait until that promise settles and returns its result
let value = await promise;


// Example:
async function myPromiseFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
  });

  let result = await promise;

  alert(result);
}

myPromiseFunction();
