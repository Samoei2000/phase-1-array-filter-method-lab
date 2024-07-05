// Code your solution here
function findMatching(drivers, searchString) {
   
    const searchLowerCase = searchString.toLowerCase();

     const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().includes(searchLowerCase)
    );

    return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
    
    const queryLowerCase = query.toLowerCase();

    
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(queryLowerCase)
    );

    return matchingDrivers;
}

function matchName(drivers, name) {
    
    const matchingDrivers = drivers.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    );

    return matchingDrivers;
}