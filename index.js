// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
  const j = drivers.slice(0, 2)
  return j
}
const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
  const j = drivers.slice(drivers.length - 2, 2)
  return j
}
