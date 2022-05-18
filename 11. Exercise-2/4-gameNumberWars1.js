function gameNumberWars(input) {
    let index = 0;
    let player1 = input[0];
    index++;
    let player2 = input[1];
    index++;
    for (let i = 0; i < input.length; i++) {
      
        let point = input[index];
        let totalPoint1 = 0;
        let totalPoint2 = 0
        let pointPl1 = 0;
        let pointPl2 = 0;
        while (point !== 'End of game') {
        
            let point = Number(input[index]);
            if (pointPl1 == 0 || pointPl2 == 0) {
                if (index % 2 == 0) {
                    pointPl1 = point;
                    index++;
                    point = Number(input[index])
                }
                else {
                    pointPl2 = point;
                    index++;
                    point = Number(input[index])
                }
            } if (pointPl1 > pointPl2) {
                let p=pointPl1-pointPl2;
                totalPoint1 += p;
                index++
                
            } else if  (pointPl1 < pointPl2){
                p=pointPl2-pointPl1;
                totalPoint2 += p;
                index++
            }
            pointPl1=0;
            pointPl2=0;
          
        }
    

}gameNumberWars(['Desi', 'Niki', '7', '5', '3', '4',
'3',
'3',
'5',
'3'])