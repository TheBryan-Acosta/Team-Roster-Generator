const Employee = require("../lib/Employee");

class Engineer extends Employee {
	constructor(employee) {
		super(employee);
		const { github } = employee;
		this.github = github;
	}
	getGithub() {
		return this.github;
	}
}

module.exports = Engineer;
