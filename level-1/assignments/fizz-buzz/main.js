function fizzBuzz (){
  let firstArray = [];
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      firstArray.push(i, 'fizzBuzz');
    } else if (i % 3 ===0) {
      firstArray.push(i, 'Fizz');
    } else if (i % 5 === 0) {
      firstArray.push(i, 'Buzz');
    } 
  }
    return firstArray;
  }

  console.log(fizzBuzz ());
