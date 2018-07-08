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
const createFareMultiplier = function createFareMultiplier(fare){
  if (fare === 4){
    return function higher(fare){fare * 4}
  }
  else{return function easy(fare){fare * 2}
}
