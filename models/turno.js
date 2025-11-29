
import mongoose from "mongoose";

const turnoSchema= new mongoose.Schema({
    cliente: {type:String, required:true},
    servicio: {type:String, required:true},
    fecha: {type:String, required:true},
    hora: {type :String, required:true},
    estado: {
        type:String,
        default:"pendiente",
        enum: ["pendiente","confirmado","cancelado"]
    }
});

export default mongoose.model("Turno",turnoSchema);