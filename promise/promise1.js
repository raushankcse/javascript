

const me = async() => {
  let myPromise = new Promise(function(resolve){
    setTimeout(function(){resolve("I love you!!");}, 3000);
  });
  document.getElementById("demo").innerHTML= await myPromise;
  console.log("me");
}


me();