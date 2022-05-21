function examp1(input) {
    let nameFilm=input[0];
    let allDay=Number(input[1]);
    let countTicket=Number(input[2]);
    let priceTicket=Number(input[3]);
    let cinemaProcent = Number(input[4]);
    let result =0;

    let sumTicket=countTicket*priceTicket;
    let allPrice=sumTicket*allDay;
    let procent=allPrice*cinemaProcent/100;

    result= allPrice-procent;

    console.log(`The profit from the movie ${nameFilm} is ${result.toFixed(2)} lv.`);
}
examp1(['The Programmer','20','500','7.50','7'])