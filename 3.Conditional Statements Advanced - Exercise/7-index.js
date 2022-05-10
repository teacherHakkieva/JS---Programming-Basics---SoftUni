function hotelRoom(input) {
    let month = input[0];
    let night = Number(input[1]);
    let place;
    let price = 0;
    switch (month) {
        case 'May':
        case 'October':
            place = 'Apartment';
            price = night * 65;
            if (night > 14) {
                price = price - price * 0.10;
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            } else {
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            }
            place = 'Studio'
            price = night * 50;
            if (night > 14) {
                price = price - price * 0.30;
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            } else if (night > 7) {
                price = price - price * 0.05;
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            }else if (night <= 7) {
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            }
            break;
        case 'June':
        case 'September':
            place = 'Apartment';
            price = night * 68.70;
            if (night > 14) {
                price = price - price * 0.10;
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            } else {
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            }
            place = 'Studio'
            price = night * 75.20;
            if (night > 14) {
                price = price - price * 0.20;
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            } else {
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            }
            break;
        case 'July':
        case 'August':
            place = 'Apartment';
            price = night * 77;
            if (night > 14) {
                price = price - price * 0.10;
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            } else {
                console.log(`${place}: ${price.toFixed(2)} lv.`);
            }
            place = 'Studio'
            price = night * 76;
            console.log(`${place}: ${price.toFixed(2)} lv.`);

            break;
      
    }
}

//hotelRoom(["May", "7"]);
hotelRoom(["June","14"]);
//hotelRoom(["August","20"]);





