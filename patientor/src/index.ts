import express from "express";

import diagnosesRouter from "./routers/diagnoses";
import patientsRouter from "./routers/patients";


const app = express();


app.use(function (_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    next();
});


app.get("/api/ping", (_req, res) => {
  res.send("pong");
});


app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
