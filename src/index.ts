import app from "./route/config/Route";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;


app.listen(PORT,()=>{

	console.log(`http://localhost:${PORT}/`);
});