function easterEggs(input) {
    let index = 0;
    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    let count = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    for (let i = 0; i < count; i++) {
        if (command === 'red') {
            redCount++;
            command = input[index];
            index++;
        }else if (command === 'orange') {
            orangeCount++;
            command = input[index];
            index++;
        }else if (command === 'blue') {
            blueCount++;
            command = input[index];
            index++;
        }else if (command === 'green') {
            greenCount++;
            command = input[index];
            index++;
        }
    }
    console.log(` Red eggs: ${redCount}`);
    console.log(` Orange eggs: ${orangeCount}`);
    console.log(` Blue eggs: ${blueCount}`);
    console.log(` Green eggs: ${greenCount}`);
    let maxCount=0;
    let maxEgg='';
    if (redCount>=maxCount) {
        maxCount=redCount;
        maxEgg='red'
    }
    if (orangeCount>=maxCount) {
        maxCount=orangeCount;
        maxEgg='orange'
    }
    if (blueCount>=maxCount) {
        maxCount=blueCount;
        maxEgg='blue'
    }
    if (greenCount>=maxCount) {
        maxCount=greenCount;
        maxEgg='green'
    }
   
    console.log(` Max eggs: ${maxCount} -> ${maxEgg}`);

} easterEggs(['7', 'orange','blue','green','green','blue','red','green'])