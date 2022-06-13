import express from "express";

import patientsService from "../services/getPatients";


const router = express.Router();


router.get("/", (_req, res) => {
  return res.send(patientsService.getPatientList());
});


export default router;
