function examp5(input) {
    let allFoodCat=Number(input[0]);
    allFoodCat=allFoodCat*1000;
    let index=1;
    let command=input[index];
    let sumEatCat=0;
    while (command !=='Adopted') {
        command=Number(input[index]);
        sumEatCat+=command;
        index++;
        command=input[index];
    }
    let food=Math.abs(allFoodCat-sumEatCat);
    if (allFoodCat>=sumEatCat) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    }else{
        console.log(`Food is not enough. You need ${food} grams more.`);
    }
}
examp5([
    '2',
'1000',
'1000',
'1000',
'Adopted'
 ])