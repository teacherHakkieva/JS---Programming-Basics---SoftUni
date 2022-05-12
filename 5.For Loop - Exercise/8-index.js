function tennisRanklist(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let winCounter = 0;

    let point = 0;
    for (let i = 0; i < count; i++) {
       
        let etap = input[index];
        index++;
        if (etap === 'W') {
            winCounter++;
            point += 2000;
        } else if (etap === 'F') {
            point += 1200;
        } else {
            point += 720;
        }
    }
    let totalPoint = startPoints + point;
    console.log(`Final points: ${totalPoint}`);
    let averagePoint = Math.floor(point / count)
    console.log(`Average points: ${averagePoint}`);
    let totalWin=winCounter/count*100;
    console.log(`${totalWin.toFixed(2)}%`);
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
