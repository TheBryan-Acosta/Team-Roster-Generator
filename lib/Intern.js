const Employee = require("../lib/Employee");

class Intern extends Employee {
	constructor(employee) {
		super(employee);
		const { school } = employee;
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
}

module.exports = Intern;
