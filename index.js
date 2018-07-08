// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
  const j = drivers.slice(0, 2)
  return j
}
const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
  const j = drivers.slice(drivers.length - 2)
  return j
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(fare){
  if (fare >= 4){return function higher(som){var j = som * 5 return j}}
  else {return function easy(fare){fare * 2}}
}
const fareDoubler = function createFareMultiplier()