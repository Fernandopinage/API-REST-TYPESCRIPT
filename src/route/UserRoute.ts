import userController from "../controller/UserController";

class UserRoute{

	route(app:any){
		app.get("/users",userController.index);
		app.post("/user",userController.show);
		app.put("/user",userController.update);
		app.delete("/user",userController.destroy);
		app.post("/user/create",userController.create);
	}
}
export default new UserRoute;