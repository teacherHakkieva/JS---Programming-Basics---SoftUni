function FishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFish = Number(input[2]);
    let result=0;
    let rent=0
    switch (season) {
        case 'Spring':
            rent=3000;
            if (countFish<=6) {
                result=rent*0.90;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }else if (countFish<=11) {
                result=rent*0.85;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }else if (countFish>=12) {
                result=rent*0.75;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }
            break;
        case 'Summer':
                  rent=4200;
            if (countFish<=6) {
                result=rent*0.90;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }else if (countFish<=11) {
                result=rent*0.85;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }else if (countFish>=12) {
                result=rent*0.75;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }
            break; 
        case 'Autumn':
            rent=4200;
            if (countFish<=6) {
                result=rent*0.90;
                
            }else if (countFish<=11) {
                result=rent*0.85;
                
            }else if (countFish>=12) {
                result=rent*0.75;
                
            }
            break;
        case 'Winter':
            rent=2600;
            if (countFish<=6) {
                result=rent*0.90;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }else if (countFish<=11) {
                result=rent*0.85;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }else if (countFish>=12) {
                result=rent*0.75;
                if (countFish%2==0) {
                    result =result*0.95;
                }else{
                    result;
                }
            }
            break;
        
    }
    if (budget>=result) {
        result=Math.abs(budget-result);
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
    }else{
        result=Math.abs(budget-result);
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);

    }
   
}
FishingBoat(["3000", "Summer", "11"]);
FishingBoat(["3600","Autumn","6"]);
FishingBoat(["2000","Winter","13"])

