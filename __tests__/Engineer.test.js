const Engineer = require("../lib/Engineer");
const testObj = require("../lib/Testployee");

test("has correct github username", () => {
	const engineer = new Engineer(testObj);

	expect(engineer.github).toEqual(testObj.github);
});

test("Is a employee", () => {
	const engineer = new Engineer(testObj);

	expect(engineer.name).toEqual("Peter");
	expect(engineer.id).toEqual(expect.any(Number));
	expect(engineer.email).toEqual(expect.any(String));
	expect(engineer.email.length).toBeGreaterThan(0);
});

test("returns github name", () => {
	const engineer = new Engineer(testObj);

	expect(engineer.getGithub()).toEqual(expect.any(String));
});
