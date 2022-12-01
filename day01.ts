// Part 1

export function mostCaloriesCarriedBySingleElf(input: string) {
  const sums = input
    .split(/\n\n/)
    .map((g) => g.split(/\n/).map((n) => Number(n)))
    .map((g) => g.reduce((a, n) => (a += n)), 0);

  return Math.max(...sums);
}

// Part 2

export function totalCaloriesOfTopThree(input: string) {
  const sums = input
    .split(/\n\n/)
    .map((g) => g.split(/\n/).map((n) => Number(n)))
    .map((g) => g.reduce((a, n) => (a += n)), 0);

  return sums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, n) => (a += n), 0);
}
