const number = [2,4,5,6,7,3];

number.map(function(element, index, array){
    console.log(element*element, index, array);
})

const result = number.map((x)=>x*x);
console.log(result);