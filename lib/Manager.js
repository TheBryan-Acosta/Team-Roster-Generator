const Employee = require("../lib/Employee");

// creates the Manager contructor that extends from Employee and inherits its properties and methods
// we deconstuct officenum from the employee to assign it to this.school (our employees school key);
// and we create a method to return officenum from our obj
class Manager extends Employee {
	constructor(employeeInfo) {
		super(employeeInfo);
		const { officenum } = employeeInfo;
		this.officenum = officenum;
	}
	getOfficeNum() {
		return this.officenum;
	}
}

module.exports = Manager;
