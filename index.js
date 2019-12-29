// Code your solution here
function findMatching(drivers, name) {
  let matched = drivers.filter(n => n.toLowerCase() === name.toLowerCase());
  return matched;
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    n => n.toLowerCase().indexOf(string.toLowerCase()) === 0
  );
}

function matchName(drivers, string) {
  return drivers.filter(s => s.name === string);
}
