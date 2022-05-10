function newHouse(input) {
    let kindOfFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let result = 0;
    switch (kindOfFlowers) {
        case "Roses":
            if (countFlowers > 80) {
                result = (countFlowers * 5) - (countFlowers * 5)* 0.10;
            } else {
                result = countFlowers * 5;
            }
            break;
        case "Dahlias":
            if (countFlowers > 90) {
                result = (countFlowers * 3.80) -(countFlowers * 3.80)* 0.15;
            } else {
                result = countFlowers * 3.80;
            }
            break;
        case "Tulips":
            if (countFlowers > 80) {
                result = (countFlowers * 2.80)-(countFlowers * 2.80) * 0.15;
            } else {
                result = countFlowers * 2.80;
            }
            break;
        case "Narcissus":
            if (countFlowers < 120) {
                result = (countFlowers * 3) * 1.15;
            } else {
                result = countFlowers * 3;
            }
            break;
        case "Gladiolus":
            if (countFlowers < 80) {
                result = (countFlowers * 2.50) * 1.20;
            } else {
                result = countFlowers * 2.50;
            }
            break;

    }

    if (result <= budget) {
        result = Math.abs(result - budget);
        console.log(`Hey, you have a great garden with ${countFlowers} ${kindOfFlowers} and ${result.toFixed(2)} leva left.`);
    } else {
        result = Math.abs(result - budget);
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "90", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
newHouse(['Gladiolus', '64', '160'])