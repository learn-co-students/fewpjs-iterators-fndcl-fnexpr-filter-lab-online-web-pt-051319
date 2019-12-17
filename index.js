// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => 
        driver.toLowerCase() === name.toLowerCase()
    )
}

let fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver =>
        driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(drivers, string) {
    return drivers.filter(driver => 
        driver.name === string
    )
}