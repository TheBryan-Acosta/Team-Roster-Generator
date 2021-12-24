const Intern = require("../lib/Intern");
const testObj = require("../lib/Testployee");

test("Has the correct school", () => {
	const intern = new Intern(testObj);

	expect(intern.school).toEqual(expect.any(String));
});

test("Is a employee", () => {
	const intern = new Intern(testObj);

	expect(intern.name).toEqual("Peter");
	expect(intern.id).toEqual(expect.any(Number));
	expect(intern.email).toEqual(expect.any(String));
	expect(intern.email.length).toBeGreaterThan(0);
});

test("returns school name", () => {
	const intern = new Intern(testObj);

	expect(intern.getSchool()).toEqual(expect.any(String));
});
