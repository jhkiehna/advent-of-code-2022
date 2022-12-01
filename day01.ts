export function mostCaloriesCarriedBySingleElf(input: string) {
  const sums = input
    .split(/\n\n/)
    .map((g) => g.split(/\n/).map((n) => Number(n)))
    .map((g) => g.reduce((a, n) => (a += n)), 0);

  return Math.max(...sums);
}
