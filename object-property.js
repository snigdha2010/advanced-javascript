const students = [
    {id:21, name:"Omar Sunny"}, 
    { id:34, name: "Maaannnaaaa"},
    {id:50, name:"mouiri"},
    {id:71, name:"deepjol"}
];
const output = [];
for(let i = 0; i<students.length; i++){
    const element = students[i];
    output.push(element.name);
}
console.log(output);

//using map 
const names = students.map(x => x.name);
console.log(names);
const ids = students.map(x =>x.id);
console.log(ids);
const bigges = students.filter(x => x.id>10);
console.log(bigges);

const biggerone = students.find(x =>x.id>5);
console.log(biggerone);