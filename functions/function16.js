function addSquare(a, b){
  function square(x){
    return x*x;
  }
  return square(a) + square(b);
}



console.log(addSquare(2,3));
console.log(addSquare(3,4));
console.log(addSquare(4,5));