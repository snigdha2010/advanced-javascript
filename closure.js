function stopWatch(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}

const watch1 = stopWatch();
console.log(watch1());
const watch2 = stopWatch();
console.log (watch2());
console.log(watch2());