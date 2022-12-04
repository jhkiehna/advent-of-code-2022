function parseRucksFromInput(input: string) {
  return input.split(/\n/).filter((l) => l.length);
}

function getPriorityOfItem(item: string): number {
  return item?.charCodeAt(0) >= 97 ? item.charCodeAt(0) - 96 : item?.charCodeAt(0) - 38;
}

// Part 1
export function getSumOfItemPriorities(input: string): number {
  const rucks = parseRucksFromInput(input);

  return rucks
    .map((ruck) => {
      const indexAtHalfway = Math.floor(ruck.length / 2);
      const firstCompartment = ruck.slice(0, indexAtHalfway);
      const secondCompartment = ruck.slice(indexAtHalfway);

      const duplicateItem = firstCompartment.split("").find((item) => secondCompartment.includes(item));

      if (!duplicateItem) throw new Error("No Duplicate Found");

      return duplicateItem;
    })
    .map((item) => getPriorityOfItem(item))
    .reduce((a, n) => (a += n), 0);
}

// Part 2
export function getSumOfBadgePriorities(input: string): number {
  const rucks = parseRucksFromInput(input);

  const rucksByGroup: string[][] = [];

  for (let i = 2; i < rucks.length; i += 3) {
    rucksByGroup.push([rucks[i - 2], rucks[i - 1], rucks[i]]);
  }

  return rucksByGroup
    .map((ruckGroup) => {
      const [ruck1, ruck2, ruck3] = ruckGroup;

      const badgeItem = ruck1.split("").find((item) => ruck2.includes(item) && ruck3.includes(item));

      if (!badgeItem) throw new Error("No Badge Item Found");

      return badgeItem;
    })
    .map((item) => getPriorityOfItem(item))
    .reduce((a, n) => (a += n), 0);
}
