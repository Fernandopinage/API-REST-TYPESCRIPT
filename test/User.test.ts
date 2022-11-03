import User from "../src/business/userBusiness";

describe("Test of the User", ()=>{

	test("listing all users", () => {
		const user =  User.index();
		expect(user.status).toBe(true);
	});
});