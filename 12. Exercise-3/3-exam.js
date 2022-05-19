function easterTrip(input) {
    let destination = input[0];
    let data = input[1];
    let day = Number(input[2]);
    let output = 0;
    switch (destination) {
        case 'France':
            if (data === '21-23') {
                output = day * 30;
            } else if (data === '24-27') {
                output = day * 35;
            } else if (data === '28-31') {
                output = day * 40;
            }
            break;
        case 'Italy':
            if (data === '21-23') {
                output = day * 28;
            } else if (data === '24-27') {
                output = day * 32;
            } else if (data === '28-31') {
                output = day * 39;
            }
            break;
        case 'Germany':
            if (data === '21-23') {
                output = day * 32;
            } else if (data === '24-27') {
                output = day * 37;
            } else if (data === '28-31') {
                output = day * 43;
            }
            break;
        default:
            break;
    }
    console.log(`Easter trip to ${destination} : ${output.toFixed(2)} leva.`);
}

easterTrip(['France', '21-23', '8'])