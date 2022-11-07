import User from "../business/userBusiness";

describe("Test of the User", ()=>{

	test("Listing all users", () => {
		const user =  User.index();
		expect(user.status).toBe(true);
	});

	test("Specific user list", async () => {
		const value = { id: 1, nome: "luiz fernando" };
		
		const user = await User.show(value);
		expect(user.status).toBe(true);
	});

	test("Create user", async () => {
		const value = { id: 6, nome: "Paulino Filho" };
		
		const user = await User.create(value);
		expect(user.status).toBe(true);
	});

	test("Edit specific user", async () => {
		const value = { id: 6, nome: "Paulino Filho Fernandes" };
		const user = await User.edit(value);
		expect(user.status).toBe(true);
	});

	test("Delete specific user", async () => {
		const value = { id: 6 };
		const user = await User.destroy(value);
		expect(user.status).toBe(true);
	});
});