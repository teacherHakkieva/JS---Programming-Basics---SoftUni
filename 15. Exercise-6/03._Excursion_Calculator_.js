function examp3(input) {
    let peoples = Number(input[0]);
    let season = input[1];

    let sum = 0;
    switch (season) {
        case 'spring':
            if (peoples<=5) {
                sum=peoples*50.00;
            }else if (peoples>5) {
                sum=peoples*48.00;
            }
            break;
        case 'autumn':
            if (peoples<=5) {
                sum=peoples*60.00;
            }else if (peoples>5) {
                sum=peoples*49.50;
            }
            break;
        case 'summer':
            if (peoples<=5) {
                sum=peoples*48.50*0.85;
            }else if (peoples>5) {
                sum=peoples*45.00*0.85;
            }
            break;
        case 'winter':
            if (peoples<=5) {
                sum=peoples*86.00*1.08;
            }else if (peoples>5) {
                sum=peoples*85.00*1.08;
            }
            break;
            break;
    }
    console.log(`${sum.toFixed(2)} leva.`);
}
examp3(['5', 'spring']);
examp3(['10', 'summer']);
examp3(['15', 'autumn']);
examp3(['20', 'winter']);