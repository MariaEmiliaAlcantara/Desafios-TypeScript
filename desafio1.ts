/*
    Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

*/

//Resposta 1

const employee: { code: number, name: string } = {
    code: 10,
    name: "John"
}

// Resposta 2

const employee2 = {
    code: 10,
    name: "John"
}

// Resposta 3

interface Employee {
    code: number,
    name: string
}

const employee3: Employee = {
    code: 10,
    name: "John"
}

// Resposta 4 (usando interface do exemplo anterior)

const employee4 = {} as Employee
employee4.code = 10;
employee4.name = "John"