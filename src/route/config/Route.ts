import UserRoute from "../UserRoute";
import express from "express";
class Route{

	public app: express.Application;

    
	constructor(){
		this.app = express();
		this.middlewares();
		this.getUserRoute();
	}
    
	middlewares(): void {
		this.app.use(express.json());
	}
    
	getUserRoute():void{
		UserRoute.route(this.app);
	}
 

}

export default new Route().app;