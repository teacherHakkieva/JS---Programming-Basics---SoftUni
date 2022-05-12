function oscars(input) {
    let index = 0
    let nameActor = input[index];
    index++;
    let pointAcademy = Number(input[index]);
    index++
    let countЕvaluation = Number(input[index]);
    index++
    let currentPoint = pointAcademy;
    let sum = 0;
    for (let i = 3; i < 2 * countЕvaluation + 2; i += 2) {
        pointAcademy += ((input[i].length * Number(input[i + 1]) / 2));
        if (pointAcademy >= 1250.5) {
            break;
        }
    }
    if (pointAcademy >= 1250.5) {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${(pointAcademy).toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - pointAcademy).toFixed(1)} more!`);
    }
}


 oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
    oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    
