INSERT INTO department (name)
VALUES
    ('Shoe');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 90000.00, 1),
    ('Associate', 40000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Beth', 'Heck', 1, NULL),
    ('Jared', 'Bowser', 2, 1);