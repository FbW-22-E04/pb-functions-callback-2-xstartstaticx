const array = [1, 2, 3, 4, 5, 6];

function squareNumber(n) {
  return n * n;
}

function square(arr, cb) {
  let newArr = [];
  arr.forEach((item) => {
    newArr.push(cb(item));
  });
  return newArr;
}

// const squared = array.map(squareNumber);
// console.log(squared);

console.log(square(array, squareNumber)); // return [1,4,9,16,25,36]
