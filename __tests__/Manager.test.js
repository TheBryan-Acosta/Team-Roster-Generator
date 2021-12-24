const Manager = require("../lib/Manager");
const testObj = require("../lib/Testployee");

test("Has the correct school", () => {
	const manager = new Manager(testObj);

	expect(manager.officenum).toEqual(expect.any(Number));
});

test("Is a employee", () => {
	const manager = new Manager(testObj);

	expect(manager.name).toEqual("Peter");
	expect(manager.id).toEqual(expect.any(Number));
	expect(manager.email).toEqual(expect.any(String));
	expect(manager.email.length).toBeGreaterThan(0);
});

test("returns officenum", () => {
	const manager = new Manager(testObj);

	expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});
