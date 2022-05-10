function Journey(input) {
    let budget=Number(input[0]);
    let season=input[1];
let destination;
let rest;
let result=0
    if (budget<=100) {
        destination='Bulgaria';
        if (season=='summer') {
            rest='Camp';
            result=budget*0.30;
        }else if(season=='winter'){
            rest='Hotel';
            result=budget*0.70;
        }
    } else if (budget<=1000){
        destination="Balkans";
        if (season=='summer') {
            rest='Camp';
            result=budget*0.40;
        }else if(season=='winter'){
            rest='Hotel';
            result=budget*0.80;
        }
    }else if(budget>1000){
        destination='Europe';
           
            rest='Hotel';
            result=budget*0.90;
        }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${rest} - ${result.toFixed(2)}`);
}
Journey(["50", "summer"]);
Journey(["75", "winter"]);
Journey(["312", "summer"]);
Journey(["678.53", "winter"]);
Journey(["1500", "summer"]);
