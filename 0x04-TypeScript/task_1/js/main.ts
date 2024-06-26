interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [__: string]: any;
}

const teacher3: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface Constructor {
    new (firstname: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstname: string, lastName: string) {
        this.firstName = firstname;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}
