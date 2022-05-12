function histogram(input) {
    let n = Number(input[0]);
    let pi1Count = 0;
    let pi2Count = 0;
    let pi3Count = 0;
    let pi4Count = 0;
    let pi5Count = 0;
    for (let i = 1; i <= n; i++) {
        let x = Number(input[i]);
        if (x < 200) {
            pi1Count++;
        }
        else if (x >= 200 && x < 400) {
            pi2Count++;
        } else if (x >= 400 && x < 600) {
            pi3Count++;
        } else if (x >= 600 && x < 800) {
            pi4Count++;
        } else {
            pi5Count++;
        }


    }
    let p1 = pi1Count / n * 100;
    let p2 = pi2Count / n * 100;
    let p3 = pi3Count / n * 100;
    let p4 = pi4Count / n * 100;
    let p5 = pi5Count / n * 100;
    
    console.log(p1.toFixed(2) + '%');
    console.log(p2.toFixed(2) + '%');
    console.log(p3.toFixed(2) + '%');
    console.log(p4.toFixed(2) + '%');
    console.log(p5.toFixed(2) + '%');

} histogram(["3", "1", "2", "999"]);
