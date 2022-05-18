function gameNumberWars(input) {
    let index = 0
    let player1 = input[index];
    index++;
    let player2 = input[index];
    index++;
    let point = input[index];
    let totalPoint1 = 0;
    let totalPoint2 = 0
    let pointPl1 = 0;
    let pointPl2 = 0;

    while (point !== 'End of game') {
        pointPl1 = 0;
        pointPl2 = 0;
        pointPl1 = Number(input[index]);
        index++;
        pointPl2 = Number(input[index]);
        index++;
        if (pointPl1 > pointPl2) {
            let p = pointPl1 - pointPl2;
            totalPoint1 += p;
        } else if (pointPl1 < pointPl2) {
            p = pointPl2 - pointPl1;
            totalPoint2 += p;
        } else if (pointPl1 = pointPl2) {
            console.log('Number wars!');

            pointPl1 = Number(input[index]);
            index++;
            pointPl2 = Number(input[index]);

            let winPl = '';
            let winPoint = 0;
            if (pointPl1 > pointPl2) {
                winPl = player1;
                winPoint = totalPoint1;
            } else if (pointPl1 < pointPl2) {
                winPl = player2;
                winPoint = totalPoint2;
            }
            console.log(`${winPl} is winner with ${winPoint} points`);
            return;
        }
        point = input[index];
    }
    console.log(`${player1} has ${totalPoint1} points`);
    console.log(`${player2} has ${totalPoint2} points `);

}
gameNumberWars(['Aleks','Georgi','4','5','3','2','4','3','4','4','5','2']);
//gameNumberWars(['Elena', 'Simeon', '6', '3', '2', '5', 'End of game'])