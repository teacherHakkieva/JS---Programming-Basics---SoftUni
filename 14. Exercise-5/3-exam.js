function examp3(input) {
    let country = input[0];
    let device = input[1];
    let point = 0;
    let maxPoint = 20;
    switch (country) {
        case 'Russia':
            if (device == 'ribbon') {
                point = 9.100 + 9.400;
            } else if (device == 'hoop') {
                point = 9.300 + 9.800;
            } else if (device == 'rope') {
                point = 9.600 + 9.000;
            }
            break;
        case 'Bulgaria':
            if (device == 'ribbon') {
                point = 9.600 + 9.400;
            } else if (device == 'hoop') {
                point = 9.550 + 9.750;
            } else if (device == 'rope') {
                point = 9.500 + 9.400;
            }
            break;
        case 'Italy':
            if (device == 'ribbon') {
                point = 9.200 + 9.500;
            } else if (device == 'hoop') {
                point = 9.450 + 9.350;
            } else if (device == 'rope') {
                point = 9.700 + 9.150;
            }
            break;
    }
    let left = (maxPoint - point) / maxPoint * 100;
    console.log(`The team of ${country} get ${point.toFixed(3)} on ${device}.`);
    console.log(`${left.toFixed(2)}%`);
}

examp3(['Russia', 'rope']);