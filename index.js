//console.log("Hello World");

const collegeName="Texas";
// console.log(collegeName.length);

const age=20;

const sum = 20+30;
const isInCollege= true;

const studentProfile = [collegeName, age, isInCollege]; 

const studentObject={
    collegeName:"Texas",
    age:20,
    isInCollege:true,
    studentProfile: studentProfile
}

// console.log(studentObject.collegeName);
// console.log(studentObject['age']);

const printStudentAttribute = () => {
    console.log("College",collegeName, "Age",age);
}

printStudentAttribute();