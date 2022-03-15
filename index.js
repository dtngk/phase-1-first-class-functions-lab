// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const dri =[drivers[0], drivers[1]];

    return dri;
};

const returnLastTwoDrivers = function(drivers){
    const dri = [drivers[drivers.length - 2], drivers[drivers.length - 1]];

    return dri;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multipler){
    return (function(fare){ return (multipler * fare)})
};

const fareDoubler = (createFareMultiplier(2));

const fareTripler = (createFareMultiplier(3));

function selectDifferentDrivers(arrayOfDrivers, drivers){
    return drivers(arrayOfDrivers);
};