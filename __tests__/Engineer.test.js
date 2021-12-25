const Engineer = require("../lib/Engineer");
const testObj = require("../lib/Testployee");

//this is the test file for our Engineer contructor and methods
test("has correct github username", () => {
	const engineer = new Engineer(testObj);

	expect(engineer.getGithub()).toEqual(testObj.github);
});

test("Is a employee", () => {
	const engineer = new Engineer(testObj);

	expect(engineer.getName()).toEqual("Peter");
	expect(engineer.getId()).toEqual(expect.any(Number));
	expect(engineer.getEmail()).toEqual(expect.any(String));
	expect(engineer.getEmail().length).toBeGreaterThan(0);
});

test("returns github name", () => {
	const engineer = new Engineer(testObj);

	expect(engineer.getGithub()).toEqual(expect.any(String));
});
