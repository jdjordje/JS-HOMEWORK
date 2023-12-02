let phonePrice=119.95
let phoneAmmount=30
let taxRateInput=5
let taxRate= taxRateInput/100

let netAmmount=phonePrice * phoneAmmount

let taxAmmount=netAmmount * taxRate

let totalAmmount = netAmmount + taxAmmount

console.log("Total price for 30 phones is:", totalAmmount,"$ of which net price is", netAmmount,"$ and",taxAmmount,"$ tax.")


