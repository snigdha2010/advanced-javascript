// find square 

const numbers = [3,4,5,6,7];
// const output = [];

// for(let i =0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element; 
//     output.push(result);
// }
// console.log(output);

//using map 

// function square (element){
//     return element*element;
// }
// const result = numbers.map(square);
// console.log(result);

// const square = element => element*element;
// const result = numbers.map(square);
// console.log(result);

const result =numbers.map(x=>x*x);
console.log(result);

// const bigger = numbers.filter(x => x>5);
// console.log(bigger);

const bigger = numbers.find(x=>x>5);
console.log(bigger);
