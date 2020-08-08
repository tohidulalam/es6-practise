//if second parameter is missing, then it will take default value 90.
function add(n1,n2=90){
    return n1+n2;
}

const sum = add(12,10);
console.log(sum);


//string literal
//Traditional Style
const fName = "karim";
const lName = "uddin";
const fullName = fName + " " + lName + " is a good boy";
console.log(fullName);

//String LIteral 
const fullName2 = `${fName} ${lName} is a good boy`;
console.log(fullName2);

//MultiLIne String 

const anything = `going home.
late night,
chattting with friend,
passing lazy time,
getting bored.
It is not a life`;
console.log(anything);