const Employee = require("../lib/Employee");

class Manager extends Employee {
	constructor(employee) {
		super(employee);
		const { officenum } = employee;
		this.officenum = officenum;
	}
	getOfficeNum() {
		return this.officenum;
	}
}

module.exports = Manager;
