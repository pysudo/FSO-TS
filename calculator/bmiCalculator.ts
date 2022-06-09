interface PhysicalParams {
  height: number;
  weight: number;
}


const parseArguments = (args: Array<string>): PhysicalParams => {
  if (args.length < 4) throw new Error("Too few arguments.");
  if (args.length > 4) throw new Error("Too many arguments");

  if (isNaN(Number(args[2]))) throw new Error("Enter a valid height");
  if (isNaN(Number(args[3]))) throw new Error("Enter a valid weight");

  return {
    height: Number(args[2]),
    weight: Number(args[3]),
  };
};


const calculateBmi = (height: number, weight: number): string => {
  if (weight === 0)  throw new Error("Weight cannot be zero");

  const bmi: number = (height / (weight ** 2)) * 703;

  if (bmi < 16.0) {
    return "Underweight (Severe thinness)";
  }
  else if (bmi >= 16.0 && bmi <= 16.9) {
    return "Underweight (Moderate thinness)";
  }
  else if (bmi >= 17.0 && bmi <= 18.4) {
    return "Underweight (Mild thinness)";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  }
  else if (bmi >= 25.0 && bmi <= 29.9) {
    return "Overweight (Pre-obese)";
  }
  else if (bmi >= 30.0 && bmi <= 34.9) {
    return "Obese (Class I)";
  }
  else if (bmi >= 35.0 && bmi <= 39.9) {
    return "Obese (Class II	";
  }
  else {
    return "Obese (Class III)";
  }
};


try {
  if (process.argv[1] === __filename) {
    const {height, weight} = parseArguments(process.argv);
    console.log(calculateBmi(height, weight));
  }
}
catch(error: unknown) {
  let errorMsg = "Something went wrong.";
  if (error instanceof Error) {
    errorMsg += " Error: " + error.message;
  }
  console.log(errorMsg);
}


export { calculateBmi };
