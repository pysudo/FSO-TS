import express from "express";

import { calculateBmi } from "./bmiCalculator";


const app = express();


app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});


app.get("/bmi", (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }

  res.send({
    height,
    weight,
    bmi: calculateBmi(height, weight)
  });
});


const PORT = 3303;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
