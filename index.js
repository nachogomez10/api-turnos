import express from  'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import turnoRoutes from "./routes/turnoRouters.js";

dotenv.config();


const app=express();
app.use(express.json());


//conexion
mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("Conectado a mongo correctamente"))
.catch((error)=> console.log("error en la consexion:",error));

app.get("/",(req,res)=>{
    res.send("Api de turnos funcionando correctamente")
});

app.use("/turnos", turnoRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Servidor escuchando en puerto", process.env.PORT);
});

