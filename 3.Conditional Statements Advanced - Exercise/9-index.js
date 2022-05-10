function skiTrip(input) {
    let day = Number(input[0]);
    let type = input[1];
    let evaluation = input[2];
    let night=day-1;
    let result = 0;
    let price = 0;
    switch (type) {
        case 'room for one person':
            price = 18.00;
            result=night*price;
            if (evaluation=='positive') {
                result=result+result*0.25; 
            }else if(evaluation=='negative'){
                result=result-result*0.10;
            }
            break;
        case 'apartment':
            price = 25.00;
            result=night*price;
            if (day>15) {
                result=result - result*0.50;
                
            }else if (day<=15&&day>=10) {
                result =result -result*0.35;
            }else if(day<10){
                result=result-result*0.30;
            }
            if (evaluation=='positive') {
                result=result+result*0.25; 
            }else if(evaluation=='negative'){
                result=result-result*0.10;
            }
            break;
        case 'president apartment':
            price = 35.00;
            result=night*price;
            if (day>15) {
                result=result - result*0.20;
                
            }else if (day<=15&&day>=10) {
                result =result -result*0.15;
            }else if(day<10){
                result=result-result*0.10;
            }
            if (evaluation=='positive') {
                result=result+result*0.25; 
            }else if(evaluation=='negative'){
                result=result-result*0.10;
            }
            break;

        default:
            break;
    }

    console.log(result.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30","president apartment","negative"]);
skiTrip(["12","room for one person","positive"]);
skiTrip(["2","apartment","positive"]);



