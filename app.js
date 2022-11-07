const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const meterToFeet = 3.281
const literToGallon = 0.264
const KiloToPound = 2.204

convertBtn.addEventListener("click", function(){
  let basevalue = inputEl.value 
  let multiplyLength = basevalue * meterToFeet
  let divideLength = basevalue / meterToFeet
  length.textContent = `${basevalue} meters = ${multiplyLength.toFixed(3)} feet | ${basevalue} feet = ${divideLength.toFixed(3)} meters`

  let multiplyVolume = basevalue * literToGallon
  let divideVolume = basevalue / literToGallon
  volume.textContent = `${basevalue} liters = ${multiplyVolume.toFixed(3)} gallons | ${basevalue} gallons = ${divideVolume.toFixed(3)} liters`

  let multiplyMass = basevalue * KiloToPound
  let divideMass = basevalue / KiloToPound
  mass.textContent = `${basevalue} kilograms = ${multiplyMass.toFixed(3)} pounds | ${basevalue} pounds = ${divideMass.toFixed(3)} kilograms`


})
