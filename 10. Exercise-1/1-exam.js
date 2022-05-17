function exam1(input) {
    let percentFat=Number(input[0]);
    let percentProtein=Number(input[1]);
    let percentVarbonydtrates=Number(input[2]);
    let totalCalories=Number(input[3]);
    let percentWater=Number(input[4]);

    let totalFat=totalCalories*percentFat/9/100;
    let totalProtein=totalCalories*percentProtein/4/100;
    let totalVarbonyd=totalCalories*percentVarbonydtrates/4/100;
    let totalFood = totalFat+totalProtein+totalVarbonyd;
    let caloryfor1Food=totalCalories/totalFood;

    caloryfor1Food=caloryfor1Food/100*(100-percentWater);

    console.log(caloryfor1Food.toFixed(4));
}
exam1(['60',
'25',
'15',
'2500',
'60'
]);