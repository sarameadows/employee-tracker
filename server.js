const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

// start server after DB connection
db.connect(err => {
    if(err) throw err;
    console.log('Database connected.');
});

// prompt user to select what they want to do
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role', 
                'Add an employee', 
                'Update an employee role',
                'Quit'
            ]
        }
    ])
        .then(answer => {
            switch(answer.choices) {
                case "View all departments": 
                    viewDepartments();
                    break;
                case "View all roles": 
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role": 
                    addRole();
                    break;
                case "Add an employee": 
                    addEmployee();
                    break;
                case "Update an employee":
                    updateEmployee();
                    break;
                case "Quit": 
                    break;
            }
        });
};

// show all departments
function viewDepartments() {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        promptUser();
    });
};

// show all roles including which department
function viewRoles() {
    const sql = `SELECT role.id AS id, 
    role.title AS title, 
    role.salary AS salary,
    department.name AS department FROM role 
    LEFT JOIN department ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        promptUser();
    });
};

function viewEmployees() {
    const sql = `SELECT employee.id AS id, 
    employee.first_name as "first name", 
    employee.last_name as "last name",
    role.title AS title, 
    role.salary AS salary,
    department.name AS department,
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        promptUser();
    });
};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateEmployee() {

};

promptUser();