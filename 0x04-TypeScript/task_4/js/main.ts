export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    experienceTeachingC: 10,
    firstName: "UTF-8",
    lastName: "TYPESCRUPT"
};

cpp.setTeacher = cTeacher;
console.log("C++");
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

java.setTeacher = cTeacher;
console.log("Java");
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());

react.setTeacher = cTeacher;
console.log("React");
console.log(react.getAvailableTeacher());
console.log(react.getRequirements());
