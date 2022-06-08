import express from "express";

import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";


const app = express();
app.use(express.json());


app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});


app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
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


app.post("/exercises", (req, res) => {
  interface Result {
    daily_exercises: Array<number>;
    target: number
  }
  const {daily_exercises, target} = req.body as Result;


  if (daily_exercises === undefined || target === undefined) {
    return res.status(400).json({error: "parameters missing"});
  }

  daily_exercises.forEach(num => {
    if (isNaN(Number(num))) {
      return res.status(400).json({error: "malformatted parameters"});
    }
    return;
  });

  if (isNaN(Number(target))) {
      return res.status(400).json({error: "malformatted parameters"});
  }

  
  const result = calculateExercises(daily_exercises, target);
  return res.json(result);
});


const PORT = 3303;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
