function examp4(input) {
   let index=0; 
   let days=Number(input[index]);
   index++;
   let liters=Number(input[index]);
   index++;
   let degrees = Number(input[index]);
   index++;
   let allLiter=0;
   let allDegrees=0

   for (let i = 0; i < days; i++) {
     allLiter+=liters;
     allDegrees+=degrees*liters;

     liters=Number(input[index++])
     degrees = Number(input[index++]);   
   }
   console.log(`Liter: ${allLiter.toFixed(2)}`);
   let deg = allDegrees/allLiter
   console.log(`Degrees: ${deg.toFixed(2)}`);
   if (deg<38) {
       console.log(`Not good, you should baking!`);
   }else if (deg<=42){
       console.log(`Super!`);
   }else if (deg>42) {
       console.log(`Dilution with distilled water!`);
   }
}
examp4(['3',
    '100','45',
    '50','55',
    '150','36'
     ]);
     examp4(['2',
    '200','43',
    '200','40'
     ])