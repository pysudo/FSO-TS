import express from "express";

import patientsService from "../services/patients";
import { toNewPatient } from "../utils";


const router = express.Router();


router.get("/", (_req, res) => {
  return res.send(patientsService.getPatientList());
});


router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    patientsService.addPatient(newPatient);

    return res.send(newPatient);
  }
  catch (error: unknown) {
    let errorMessage = "Something went wrong.";

    if (error instanceof Error) {
      errorMessage += " Error: " + error.message; 
    }
    return res.status(400).send(errorMessage);
  }
});


export default router;
