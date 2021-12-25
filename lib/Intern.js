const Employee = require("../lib/Employee");

//creates the Intern contructor that extends from Employee and inherits its properties and methods
// we deconstuct school from the employee to assign it to this.school (our employees school key);
// and we create a method to return school from our obj
class Intern extends Employee {
	constructor(employeeInfo) {
		super(employeeInfo);
		const { school } = employeeInfo;
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
}

module.exports = Intern;
