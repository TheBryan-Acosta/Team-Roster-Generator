const Employee = require("../lib/Employee");

//creates the engineer contructor that extends from Employee and inherits its properties and methods
// we deconstuct github from the employee to assign it to this(our employee)
// and we create a method to return github from our obj
class Engineer extends Employee {
	constructor(employeeInfo) {
		super(employeeInfo);
		const { github } = employeeInfo;
		this.github = github;
	}
	getGithub() {
		return this.github;
	}
}

module.exports = Engineer;
