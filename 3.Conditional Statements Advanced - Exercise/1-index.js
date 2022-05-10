function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let colms = Number(input[2]);
    let result=0;
    if (projection==='Premiere') {
        result=rows*colms*12.00;
    }else if(projection==='Normal'){
        result=rows*colms*7.50;
    }else if(projection==='Discount'){
        result=rows*colms*5.00;
    }
    console.log(result.toFixed(2)+' leva');
}
cinema(["Premiere","10","12"]);
