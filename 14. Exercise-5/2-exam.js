function examp2(input) {
    let nameSeries=input[0];
    let durationSeries=Number(input[1]);
    let durationRest=Number(input[2]);

    let timeLunch=durationRest*1/8;
    let timeRest=durationRest*1/4;
    let leftTime= durationRest-timeLunch-timeRest;
    
    if (leftTime>=durationSeries) {
      let  result = Math.abs(durationSeries-leftTime)
        console.log(`You have enough time to watch ${nameSeries} and left with ${result} minutes free time.`);
    }else{
        console.log("You don't have enough time to watch ${nameSeries}, you need ${result} more minutes.");
    }
}
examp2(['Game of Thrones','60','96'])