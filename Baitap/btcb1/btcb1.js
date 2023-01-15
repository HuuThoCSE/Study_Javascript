var name = "Tho"
var counstry = "Tien Giang"
str = `I\'m ${name}. I\'m from ${counstry}.`
console.log(str)

const result = str
console.log(result)

var ViTriBD = result.indexOf('m ')+2
var vitri_cham = result.indexOf('.')
varname = result.slice(ViTriBD, vitri_cham)
console.log(varname)

var ViTriBD2 = result.lastIndexOf('m ')+2
varcountry = result.slice(ViTriBD2, result.length-1)
console.log(varcountry)
