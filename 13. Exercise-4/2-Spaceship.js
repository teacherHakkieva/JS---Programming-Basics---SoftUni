function examp2(input) {
    let widthShip = Number(input[0]);
    let lengthShip = Number(input[1]);
    let heightShip = Number(input[2]);
    let avrHeightAstr = Number(input[3]);

    let volShip = widthShip * lengthShip * heightShip;
    let volAstr = (avrHeightAstr+0.40)*2*2;
    let place =Math.floor(volShip/volAstr);

    if (place<3) {
       console.log(`The spacecraft is too small.`); 
    }else if (place<=10) {
        console.log(`The spacecraft holds ${place} astronauts.`);
    }else if (place>10) {
        console.log(`The spacecraft is too big.`);
    }
}
examp2([
    '3',
    '3',
    '4',
    '1.68'

])