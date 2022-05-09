function fruitShop(input) {
    fruit = input[0];
    day = input[1];
    quantity = Number(input[2]);
    result = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': result = quantity * 2.50;
                    console.log(result.toFixed(2));
                    break;
                case 'apple': result = quantity * 1.20;
                    console.log(result.toFixed(2));
                    break;
                case 'orange': result = quantity * 0.85;
                    console.log(result.toFixed(2));
                    break;
                case 'grapefruit': result = quantity * 1.45;
                    console.log(result.toFixed(2));
                    break;
                case 'kiwi': result = quantity * 2.70;
                    console.log(result.toFixed(2));
                    break;
                case 'pineapple': result = quantity * 5.50;
                    console.log(result.toFixed(2));
                    break;
                case 'grapes': result = quantity * 3.85;
                    console.log(result.toFixed(2));
                    break;

                default:
                    console.log('error');
                    break;
            }break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': result = quantity * 2.70;
                    console.log(result.toFixed(2));
                    break;
                case 'apple': result = quantity * 1.25;
                    console.log(result.toFixed(2));
                    break;
                case 'orange': result = quantity * 0.90;
                    console.log(result.toFixed(2));
                    break;
                case 'grapefruit': result = quantity * 1.60;
                    console.log(result.toFixed(2));
                    break;
                case 'kiwi': result = quantity * 3.00;
                    console.log(result.toFixed(2));
                    break;
                case 'pineapple': result = quantity * 5.60;
                    console.log(result.toFixed(2));
                    break;
                case 'grapes': result = quantity * 4.20;
                    console.log(result.toFixed(2));
                    break;
                    console.log(result.toFixed(2));
                default:
                    console.log('error');
                    break;
            } break;
        default:
            console.log('error');
            break;
    }
}
FruitShop(["apple", "Tuesday", "2"]);
FruitShop(["orange", "Sunday", "3"]);
FruitShop(["kiwi", "Monday", "2.5"]);
FruitShop(["grapes", "Saturday", "0.5"]);
FruitShop(["tomato", "Monday", "0.5"]);




