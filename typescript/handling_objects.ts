type Student = {
    name: string;
    age: number;
    class?: number;  
};

const student: Student = {
    name: "Wambo",
    age: 12,
    class: 7
};


console.log(student.name);  
console.log(student.age);   
console.log(student.class); 