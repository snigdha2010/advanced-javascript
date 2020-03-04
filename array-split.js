const nums = [2,3,4,5,4,56,6,7];
const parts = nums.slice(2,5);
console.log(parts);

const remove = nums.splice(2,4,9); //show removed item 
console.log(remove);
console.log (nums);

const together = nums.join(" ");
console.log(together);
