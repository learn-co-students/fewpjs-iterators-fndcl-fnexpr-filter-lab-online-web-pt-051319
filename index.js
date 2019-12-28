//['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, str) {
    let result = drivers.filter(d => d.toUpperCase() === str.toUpperCase());
    return result;
}

function fuzzyMatch(drivers, str) {
    let result = drivers.filter(d => d.charAt(0) === str.charAt(0));
    return result;
}

function matchName(drivers, str) {
    let result = drivers.filter(d => d.name.toUpperCase() === str.toUpperCase());
    return result;
}

