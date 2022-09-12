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
            switch(answer) {
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

    db.promise().query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
        console.table(rows);
        promptUser();
    });
};

function viewRoles() {

};

function viewEmployees() {

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