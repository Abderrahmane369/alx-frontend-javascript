interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
        firstName: "A",
        lastName: "A",
        age: 1,
        location: "A"
    },
    student2: Student = {
        firstName: "A",
        lastName: "A",
        age: 1,
        location: "A"
    };

const arrayStudents = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

for (const s of arrayStudents) {
	const row = document.createElement("tr");
	const td = document.createElement("td");
	const td1 = document.createElement("td");

	td.innerHTML = s.firstName;
	td1.innerHTML = s.lastName;

	row.appendChild(td);
	row.appendChild(td1);
	table.appendChild(row);
}