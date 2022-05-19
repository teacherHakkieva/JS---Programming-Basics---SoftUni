function easterParty(input) {

    let coutGuests = Number(input[0]);
    let priceEnvelope = Number(input[1]);
    let budget = Number(input[2]);
    let cake = 0.10*budget;
  
    if (coutGuests>20) {
        priceEnvelope-= priceEnvelope*0.25; 
    } else if(coutGuests<=20&&coutGuests>15) {
        priceEnvelope-= priceEnvelope*0.20; 
    } else if(coutGuests<=15&&coutGuests>=10) {
        priceEnvelope-= priceEnvelope*0.15; 
    } else{
        priceEnvelope;
    }
    let allPrice= coutGuests*priceEnvelope + cake;

    let diff = Math.abs(budget-allPrice).toFixed(2);
    if (budget>=allPrice) {
        console.log(`It is party time! ${diff} leva left.`);
    }else{
        console.log(`No party! ${diff} leva needed.`);
    }
}
easterParty(['18', '30', '450']);
easterParty(['18', '30', '450']);