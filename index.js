function findMatching(list, keyWord) {
  return list.filter(name => name.toUpperCase() === keyWord.toUpperCase());
}

function fuzzyMatch(list, keyWord) {
  return list.filter(
    name =>
      name.substr(0, keyWord.length).toUpperCase() === keyWord.toUpperCase()
  );
}

function matchName(list, keyWord) {
  return list.filter(driver => driver.name === keyWord);
}
