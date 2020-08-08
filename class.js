class student{
    constructor(id,name){
        this.name = name;
        this.id = id;
        this.school = "Central Public School And College";
    }
}

var student1 = new student("Saiful", 12);
var student2 = new student("rakib", 01);

console.log(student1);
console.log(student2);


class PersonClass{
    constructor(name, age, job) {
       this.name = name;
       this.age = age;
       this.job = job;
      
    }
 }

 class TeacherClass extends PersonClass {
    constructor(name, age, job, subject) {
       super(name, age, job);
       this.subject = subject;
    }
 }

 const ourSir = new TeacherClass('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');

 console.log(ourSir.name);
 console.log(ourSir.age);
console.log(ourSir.job);
console.log(ourSir.subject);
