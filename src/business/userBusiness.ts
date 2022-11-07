import e, { Request, Response } from "express";
import { Iuser } from "../interfaces/Iuser";

class User {

	public listAll: Iuser[] = [

		{
			id: 1,
			nome: "luiz fernando"
		},
		{
			id: 2,
			nome: "Maria Eduarda"
		},
		{
			id: 3,
			nome: "Rhuan Claudio"
		},
		{
			id: 4,
			nome: "Lucia Maria"
		},
		{
			id: 5,
			nome: "Felipe Amorin"
		},
	];

	index() {

		try
		{
			const result = this.listAll;
			return { status: true, result: result };

		} catch (error)
		{
			return { status: false, result: error };
		}

	}

	show(req: any) {
		try
		{
			const result = Object.assign(req);
			return { status: true, result: result };

		} catch (error)
		{
			return { status: false, result: error };
		}
	}

	async create(req: any) {

		try
		{
			const result = this.listAll.push(req);

			return { status: true, mensage: "record saved successfully" };

		} catch (error)
		{
			return { status: false, result: error };
		}
	}

	async store(req: Request, res: Response) {


		try
		{
			const result = this.listAll.push(req.body);

			return { status: true, mensage: "record saved successfully" };

		} catch (error)
		{
			return { status: false, result: error };
		}

	}

	async edit(req: any) {

		try
		{
			const edit = this.listAll.filter(e => e.id == req.id);
			const result = edit[0].nome = req.nome;

			return { status: true, mensage: "record successfully changed" };

		} catch (error)
		{
			return { status: false, result: error };
		}

	}

	async update(req: Request, res: Response) {

		try
		{

			const edit = this.listAll.filter(e => e.id == req.body.id);
			const result = edit[0].nome = req.body.nome;

			return { status: true, mensage: "record successfully changed" };

		} catch (error)
		{
			return { status: false, result: error };
		}

	}

	async destroy(req: any) {

		try
		{

			const remove = this.listAll.filter(e => e.id !== req.id);
			return { status: true, mensage: "record successfully removed", result: remove };

		} catch (error)
		{
			return { status: false, result: error };
		}

	}

}

export default new User;
