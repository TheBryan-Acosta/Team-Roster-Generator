const Manager = require("../lib/Manager");
const testObj = require("../lib/Testployee");

//this is the test file for our Manager contructor and methods

test("Has the correct school", () => {
	const manager = new Manager(testObj);

	expect(manager.officenum).toEqual(expect.any(Number));
});

test("Is a employee", () => {
	const manager = new Manager(testObj);

	expect(manager.getName()).toEqual("Peter");
	expect(manager.getId()).toEqual(expect.any(Number));
	expect(manager.getEmail()).toEqual(expect.any(String));
	expect(manager.getEmail().length).toBeGreaterThan(0);
});

test("returns officenum", () => {
	const manager = new Manager(testObj);

	expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});
