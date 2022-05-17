function exam3(input) {
    let weightKg = Number(input[0]);
    let type = input[1];
    let distanceKg = Number(input[2]);
    let totalSum=0;
    switch (type) {
        case 'standard':
            if (weightKg<1) {
                totalSum=0.03*distanceKg;
            }else if (weightKg<10) {
                totalSum=0.05*distanceKg;
            }else if (weightKg<40) {
                totalSum=0.10*distanceKg;
            }else if (weightKg<90) {
                totalSum=0.15*distanceKg;
            }else if (weightKg<150) {
                totalSum=0.20*distanceKg;
            }
            break;
        case 'express':
            if (weightKg<1) {
                totalSum=0.03*distanceKg;
                sum=weightKg*(0.03/100*80);
                totalSum=totalSum+distanceKg*sum ;
            }else if (weightKg<10) {
                totalSum=0.05*distanceKg;
                sum=weightKg*(0.05/100*40);
                totalSum=totalSum+distanceKg*sum ;
            }else if (weightKg<40) {
                totalSum=0.10*distanceKg;
                sum=weightKg*(0.10/100*5);
                totalSum=totalSum+distanceKg*sum ;
            }else if (weightKg<90) {
                totalSum=distanceKg*0.15;
                sum=weightKg*(0.15/100*2);
                totalSum=totalSum+distanceKg*sum ;
               
            }else if (weightKg<150) {
                totalSum=0.20*distanceKg;
                sum=weightKg*(0.20/100);
                totalSum=totalSum+distanceKg*sum ;
            }
            break;
        default:
            break;
    }

    console.log(`The delivery of your shipment with weight of ${weightKg.toFixed(3)} kg. would cost ${totalSum.toFixed(2)} lv.`);
}
exam3(['87', 'express', '130']);