// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart,function(orderId){
//   proceedToPayment(orderId, function(paymentInfo){

//     showOrderSummary(paymentInfo, function(){
//       updateWalletBalance();

//     });
  
//   });

// });  



// createOrder(cart)
//   .then(function(orderId){
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo){
//     return showOrderSummary(paymentInfo)
//   })
//   .then(function(paymentInfo){
//     return updateWalletBalance(paymentInfo);
//   });






// const GITHUB_API = "https://api.github.com/users/raushankcse"

// const user = fetch(GITHUB_API);


// console.log(user);

// user.then(function(data){
//   console.log(data);
// })





const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function(orderId){
    console.log(orderId);
    return orderId;
  })
  .catch(function(err){
    console.log(err.message);
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .catch(function(err){
    console.log(err.message);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch(function(err){
    console.log(err.message);
  })
  


function createOrder(cart){
  const pr = new Promise(function(resolve, reject){
    // createOrder
    // validateCart
    // orderId
    if(!validateCart(cart)){
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if(orderId){
      setTimeout(function(){
        resolve(orderId);
      }, 5000);

    }

  });

  return pr;
}

function proceedToPayment(orderId){
  ///
  return new Promise( function(resolve, reject){
    resolve("Payment Successfull");
  })
}

function validateCart(cart){
  return false;
}