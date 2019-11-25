const findMatching = (drivers, name) => {
	return drivers.filter( driver => driver.match(RegExp(name, 'gi')) )
}

const fuzzyMatch = (drivers, name) => {
	return drivers.filter(driver => driver.match(RegExp(`\\b${name}`, 'gi')))
}

const matchName = (drivers, name) => {
	return drivers.filter(driver => driver.name == name)
}