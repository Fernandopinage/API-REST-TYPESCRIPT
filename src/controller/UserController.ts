import { Request, Response } from "express";
import User from "../business/userBusiness";

class UserController{

	async index(req:Request,res:Response){

		const {status, result} = await User.index();

		if(status){
			return res.status(200).send({result});
		}else{
			return res.status(500).send({result});
		}
	}

	async show(req: Request, res: Response){

		const {status, result} = await User.show(req,res);

		if(status){
			return res.status(200).send({result});
		}else{
			return res.status(500).send({result});
		}
	}


	async create(req:Request, res:Response){

		const {status, result, mensage} = await User.create(req,res);

		if(status){
			return res.status(201).send({mensage});
		}else{
			return res.status(500).send({result});
		}

	}

	async store(req:Request, res:Response){

		const {status, result, mensage} = await User.create(req,res);

		if(status){
			return res.status(201).send({mensage});
		}else{
			return res.status(500).send({result});
		}
	}

	async edit(req:Request, res:Response){

		const {status, result, mensage} = await User.edit(req,res);
		if(status){
			return res.status(200).send({mensage});
		}else{
			return res.status(500).send({result});
		}

	}

	async update(req:Request, res:Response){

		const {status, result, mensage} = await User.update(req,res);
		if(status){
			return res.status(200).send({mensage});
		}else{
			return res.status(500).send({result});
		}
	}
    
	async destroy(req:Request, res:Response){

		const {status, result, mensage} = await User.destroy(req,res);
		if(status){
			return res.status(200).send({mensage,result});
		}else{
			return res.status(500).send({result});
		}

	}
}

export default new UserController;

