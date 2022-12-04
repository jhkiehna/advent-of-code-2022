type StrategyGuide = Array<["A" | "B" | "C", "X" | "Y" | "Z"]>;
type Rounds = Array<["A" | "B" | "C", "A" | "B" | "C"]>;

function parseStrategyGuideFromInput(input: string) {
  return input
    .split(/\n/)
    .filter((l) => l.length)
    .map((l) => l.split(" ")) as StrategyGuide;
}

function calculateScoreForRound(round: Rounds[0]) {
  const [opponentMove, yourMove] = round;
  // Draws
  if (opponentMove === "A" && yourMove === "A") return 4;
  if (opponentMove === "B" && yourMove === "B") return 5;
  if (opponentMove === "C" && yourMove === "C") return 6;

  // Wins
  if (opponentMove === "C" && yourMove === "A") return 7;
  if (opponentMove === "A" && yourMove === "B") return 8;
  if (opponentMove === "B" && yourMove === "C") return 9;

  // Losses
  if (opponentMove === "B" && yourMove === "A") return 1;
  if (opponentMove === "C" && yourMove === "B") return 2;
  if (opponentMove === "A" && yourMove === "C") return 3;

  throw new Error("Bad Round");
}

// Part 1
export function getTotalScoreFromStrategyGuide(input: string): number {
  const strategyGuide = parseStrategyGuideFromInput(input);

  return strategyGuide
    .map((round): Rounds[0] => {
      if (round[1] === "X") return [round[0], "A"];
      if (round[1] === "Y") return [round[0], "B"];
      if (round[1] === "Z") return [round[0], "C"];

      throw new Error("Something went wrong");
    })
    .map((round) => calculateScoreForRound(round))
    .reduce((a, n) => (a += n), 0);
}

// Part 2
export function getTotalScoreFromActualStrategyGuide(input: string): number {
  const strategyGuide = parseStrategyGuideFromInput(input);

  return strategyGuide
    .map((round): Rounds[0] => {
      const [opponentMove, yourIndicator] = round;
      // Draws
      if (opponentMove === "A" && yourIndicator === "X") return [opponentMove, "C"];
      if (opponentMove === "B" && yourIndicator === "Y") return [opponentMove, "B"];
      if (opponentMove === "C" && yourIndicator === "Z") return [opponentMove, "A"];

      // Wins
      if (opponentMove === "C" && yourIndicator === "X") return [opponentMove, "B"];
      if (opponentMove === "A" && yourIndicator === "Y") return [opponentMove, "A"];
      if (opponentMove === "B" && yourIndicator === "Z") return [opponentMove, "C"];

      // Losses
      if (opponentMove === "B" && yourIndicator === "X") return [opponentMove, "A"];
      if (opponentMove === "C" && yourIndicator === "Y") return [opponentMove, "C"];
      if (opponentMove === "A" && yourIndicator === "Z") return [opponentMove, "B"];

      throw new Error("Bad Round");
    })
    .map((round) => calculateScoreForRound(round))
    .reduce((a, n) => (a += n), 0);
}
