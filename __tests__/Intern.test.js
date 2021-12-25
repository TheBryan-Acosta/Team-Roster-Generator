const Intern = require("../lib/Intern");
const testObj = require("../lib/Testployee");

//this is the test file for Intern contructor and methods

test("Has the correct school", () => {
	const intern = new Intern(testObj);

	expect(intern.school).toEqual(expect.any(String));
});

test("Is a employee", () => {
	const intern = new Intern(testObj);

	expect(intern.getName()).toEqual("Peter");
	expect(intern.getId()).toEqual(expect.any(Number));
	expect(intern.getEmail()).toEqual(expect.any(String));
	expect(intern.getEmail().length).toBeGreaterThan(0);
});

test("returns school name", () => {
	const intern = new Intern(testObj);

	expect(intern.getSchool()).toEqual(expect.any(String));
});
