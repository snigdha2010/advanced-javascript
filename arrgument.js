function add (a,b){
    console.log(...arguments);
    return a+b+arguments[2];
}

const result = add(1,2,3); 
console.log(result);

