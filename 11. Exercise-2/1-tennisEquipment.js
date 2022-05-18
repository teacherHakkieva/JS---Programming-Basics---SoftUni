function tennisEquipment(input) {
let tennisRaketPrice = Number(input[0]);
let tennisRaketCount=  Number(input[1]);
let sneakersCountt= Number(input[2]);
let sneakerPrice=tennisRaketPrice/6;

let allTennisRakerPrice=tennisRaketPrice*tennisRaketCount;
let allSneaskerPrice=sneakerPrice*sneakersCountt;
let anotherTeamPrice=(allTennisRakerPrice+allSneaskerPrice)*0.20;

let allPrice=allSneaskerPrice+allTennisRakerPrice+anotherTeamPrice;
let priceDjokovic = allPrice/8;
let priceSponsor = allPrice*7/8;

console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovic)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsor)}`);
}
tennisEquipment(['850','4','2'])