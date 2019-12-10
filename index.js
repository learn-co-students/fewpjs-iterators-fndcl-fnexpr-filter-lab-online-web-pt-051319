function findMatching(drivers, name) {
  const matched = drivers.filter(d => d.toLowerCase() === name.toLowerCase() )
  return matched
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( d => d.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string) {
  const matched = drivers.filter(d => d.name === string )
  return matched
}