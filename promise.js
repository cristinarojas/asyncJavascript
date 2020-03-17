// Problem: Given 2 functions getCoupons(), tryCoupon()
// show the greatest discount value.

/*
  :PROMISES:

  Notes: Promises are used to handle asynchronous operations.
  fulfilled: Action related to the promise succeeded
  rejected: Action related to the promise failed
  pending: Promise is still pending i.e not fulfilled or rejected yet
  settled: Promise has fulfilled or rejected

  A promise can be created using Promise constructor.
  Syntax

  - promise constructor new Promise(1 argument), a callback function.
  let promise = new Promise((resolve, reject) => {
    // do something
  })

  - The callback function accept 2 parameters
    ((resolve, reject) => {

  })
  - Do operations inside the callback function
    and if everything went well then call resolve.
    if something wrong call reject.

    Example:
    function getCoupons() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(['coupon1','coupon3', 'coupon2', ]), Math.random() * 10);
        });
    }

  :ASYNC/AWAIT:
  The word “async” before a function means
  one simple thing: a function always returns a promise.
*/

/*
  ORIGINAL FUNCTIONS:

  function getCoupons() {
      return new Promise((resolve) => {
          setTimeout(() => resolve(['coupon1','coupon3', 'coupon2', ]), Math.random() * 10);
      });
  }

  function tryCoupon(coupon = '') {
      return new Promise((resolve) => {
          let discount = 0;
          switch(coupon) {
              case 'coupon1':
                  discount = 10; break;
              case 'coupon2':
                  discount = 20; break;
              case 'coupon3':
                  discount = 30; break;
          }
          setTimeout(() => resolve(discount), Math.random() * 10);
      });
  }

  getCoupons();
  
*/

// eventually resolves w/ an array of coupons (array of strings)
function getCoupons() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(['coupon1','coupon3', 'coupon2', ]), Math.random() * 10);
    });
}

// eventually resolves w/ a discount (number)
async function tryCoupon(coupon = '') {
    return new Promise((resolve) => {
        let discount = 0;
        switch(coupon) {
            case 'coupon1':
                discount = 10; break;
            case 'coupon2':
                discount = 20; break;
            case 'coupon3':
                discount = 30; break;
        }
        setTimeout(() => resolve(discount), Math.random() * 10);
    });
}

async function getBestCoupon() {
    // your code here
    const couponsResult =  await getCoupons();

    let largestDiscount = 0;
    let largestCoupon = '';
    for(var i=0; i < couponsResult.length; i++) {

       const couponEach = couponsResult[i];
       const resultEach = await tryCoupon(couponEach);
       if (resultEach > largestDiscount) {
        largestDiscount = resultEach;
        largestCoupon = couponEach
       }

    }

    return largestCoupon;
}


 getBestCoupon().then(console.log)
