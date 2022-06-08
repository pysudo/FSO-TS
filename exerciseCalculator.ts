interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface ExerciseStats {
  exerciseHours: Array<number>;
  target: number;
}


const parseArguments = (args: Array<string>): ExerciseStats => {
  if (args.length < 4) throw new Error("Too few arguments.");

  const exerciseHours: Array<number> = (args.splice(3, ))
    .map(arg => {
      if (isNaN(Number(arg))) throw new Error("Enter a valid hours.");
      return Number(arg);
    });

  const target: string = args[args.length - 1];
  if (isNaN(Number(target))) throw new Error("Enter a valid target value.");

  return {
    exerciseHours,
    target: Number(target)
  };
};


const calculateExercises = (
  exerciseHours: Array<number>,
  target: number
): ExerciseResult=> {
  if (target === 0) throw new Error("target cannot be 0.");

  const periodLength: number = exerciseHours.length;
  const trainingDays: Array<number> = exerciseHours.filter(hour => hour != 0);
  const totalHours : number = exerciseHours.reduce((a, b) => a + b, 0);
  const average: number = totalHours / periodLength;
  const performanceRatio: number = (average / target) * 100;

  let rating: number;
  let ratingDescription: string;
  if (performanceRatio < 50) {
    rating = 1;
    ratingDescription = "not too bad but could be better.";
  }
  else if (performanceRatio >= 50 && performanceRatio <= 99 ) {
    rating = 2;
    ratingDescription = "Good";
  }
  else {
    rating = 3;
    ratingDescription = "Exceptional";
  }

  return {
    periodLength,
    trainingDays: trainingDays.length,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average
  };
};


try {
  if (process.argv[1] === __filename) {
    const {exerciseHours, target} = parseArguments(process.argv);
    console.log(calculateExercises(exerciseHours, target));
  }
}
catch (error: unknown) {
  let errorMsg = "Something went wrong.";
  if (error instanceof Error) {
    errorMsg += " Error: " + error.message;
  }
  console.log(errorMsg);
}


export { calculateExercises };
