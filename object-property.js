const students = [
    {id : 01, name : 'rakib'},
    {id : 02, name : 'saiful'},
    {id : 03, name : 'shohag'}
];
let empty = [];
for(let i=0; i<students.length; i++){
    let stName = students[i];
    empty.push(stName.name);
    console.log(stName.name);
}
console.log(empty);

const names = students.map((student)=>student.name)
const ids = students.map((student)=>student.id)
console.log(names)
console.log(ids)