const Employee = require("../lib/Employee");

//This is the test object inquirer will pass.
const testObj = require("../lib/Testployee");

test("creates the employee object", () => {
	const employee = new Employee(testObj);

	expect(employee.name).toBe("Peter");
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.email.length).toBeGreaterThan(0);
});

test("gives employee name", () => {
	const employee = new Employee(testObj);

	expect(employee.getName()).toBe("Peter");
});

test("gives employee id", () => {
	const employee = new Employee(testObj);

	expect(employee.getId()).toEqual(expect.any(Number));
});

test("gives employee Email", () => {
	const employee = new Employee(testObj);

	expect(employee.getEmail()).toEqual(
		expect.stringContaining("thisandthat@js.com")
	);
});

test("gives employee Role", () => {
	const employee = new Employee(testObj);

	expect(employee);
});
