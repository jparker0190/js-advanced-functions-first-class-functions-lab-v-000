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
  let result
  if (fare === 4){
    function higher(fare){result * 4}
  }
  else{fare * 2}
  return result
}
