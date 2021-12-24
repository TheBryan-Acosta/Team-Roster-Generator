class Employee {
	constructor(response) {
		const { name, id, email, role } = response;
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return this.role;
	}
}

module.exports = Employee;
