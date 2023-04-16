import express from "express";
import { config } from "dotenv";
import cors from 'cors'

config();
export const app = express();

app.use(express.json())
app.use(cors())


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`Acesso: http://localhost:8000`);
});
