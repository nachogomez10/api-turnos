import express from "express";
import Turno from "../models/turno.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const nuevoTurno = new Turno(req.body);
    const guardado = await nuevoTurno.save();
    res.json(guardado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error al guardar turnos" });
  }
});


router.get("/", async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: "error al obtener turnos" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id);
    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: "error al obtener turno" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Turno.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: "error al actualizar turno" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Turno.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Turno eliminado" });
  } catch (error) {
    res.status(500).json({ error: "error al eliminar turno" });
  }
});

export default router;
