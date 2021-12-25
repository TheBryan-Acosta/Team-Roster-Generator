const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-page");

//create our employees array to store our employees in a array of objects
const employees = [];

async function addEmployee() {
	//prompt user to input data for their employee, will prompt if they would like to start off with a manager first.
	//store anwsers in employee
	const employee = await inquirer.prompt([
		{
			type: "confirm",
			name: "confirmMan",
			message: "Would you like to add a manager first?",
			default: true,
			when: () => employees.length == 0,
		},
		{
			type: "list",
			name: "role",
			message: "What is your employees role?",
			choices: ["Engineer", "Intern", "Manager"],
			when: (answers) => employees.length > 0 || answers.confirmMan == false,
		},
		{
			type: "input",
			name: "name",
			message: "What is your employees name?",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				}
				return "Please provide a valid name";
			},
		},
		{
			type: "input",
			name: "id",
			message: "What is your employees id?",
			validate: (idInput) => {
				//we use parseInt idInput to zap away the characters other than numbers,
				//then we check if idInput is falsy (undefined, (will be undefined if the user entered nothing) or '', (will be '' if there are no numbers)
				// if its falsy the validation failed.
				// or if we take that left over numbers and convert it to a string and take the length of that string,
				// and the initial idInput (what the user entered) and if they are not equal, then there are characters other than numbers
				// which would then fail the validation.
				if (
					!parseInt(idInput) ||
					parseInt(idInput).toString().length != idInput.length
				) {
					return "Please provide a valid number ";
				}
				return true;
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is your employees email?",
			validate: (emailInput) => {
				if (emailInput.includes("@") && emailInput.includes(".")) {
					return true;
				}
				return "Please provide a valid email address";
			},
		},
		{
			type: "input",
			name: "github",
			message: "What is your engineers github?",
			validate: (githubInput) => {
				if (githubInput) {
					return true;
				}
				return "Please provide a valid name";
			},
			when: (answers) => answers.role === "Engineer",
		},
		{
			type: "input",
			name: "school",
			message: "What is your interns school?",
			validate: (schoolInput) => {
				if (schoolInput) {
					return true;
				}
				return "Please provide a valid name";
			},
			when: (answers) => answers.role === "Intern",
		},
		{
			type: "input",
			name: "officenum",
			message: "What is your managers office number?",
			validate: (officenumInput) => {
				if (officenumInput) {
					return true;
				}
				return "Please provide a valid name";
			},
			when: (answers) => answers.role === "Manager" || !answers.role,
		},
		{
			type: "confirm",
			name: "confirmAddEmployee",
			message: "Would you like to enter another employee?",
			default: false,
		},
	]);

	//destructure the role input to validate which contructor to use.
	//the beggining manager has a role of undefined but we know this so we validate it as a manager in the else statement
	//after that we push the new employee into our employees array
	const { role } = employee;

	if (role == "Intern") {
		const newemployee = new Intern(employee);
		employees.push(newemployee);
	} else if (role == "Engineer") {
		const newemployee = new Engineer(employee);
		employees.push(newemployee);
	} else {
		const newemployee = new Manager(employee);
		employees.push(newemployee);
	}
	// if we prompt to add another employee we call addEmployee again (wont prompt the first manager validation)
	if (employee.confirmAddEmployee) {
		addEmployee();
	}
	//we pass the employees arr into our page template, write that file then copy our style hseet into dist
	else {
		writeFile(generatePage(employees)).then(copyFile());
		console.log("File Created! Find it in your dist directory!");
		return;
	}
}

addEmployee();
