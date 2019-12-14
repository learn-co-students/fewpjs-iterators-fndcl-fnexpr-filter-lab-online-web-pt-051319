// Code your solution here
function findMatching(drivers, string) {
    // takes an array and a string as arguments and returns matching drivers
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    // returns all drivers whose names begin with the provided letters
    let stringLength = string.length

    return drivers.filter(driver => {
        return driver.substring(0,stringLength) === string
    })
}

function matchName(drivers, string) {
    // return each element whose name property matches the provided string argument
    return drivers.filter(driver => {
        return driver.name === string
    })
}