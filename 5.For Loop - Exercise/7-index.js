function trekkingMania(input) {
    let name = input[0];
    index = 1;
    let evalation = input[index];
    let avarageGrade = 0;

    while (index <= 12) {
        let evalationNum = Number(evalation)
        if (evalationNum < 4) {
            console.log(`${name} has been excluded at ${index} grade`);
            break;
        }
        avarageGrade += evalationNum;
        index++;
        evalation = input[index]
        if (index === 13) {
            avarageGrade /= 12;
            console.log(`${name} graduated. Average grade: ${avarageGrade.toFixed(2)} `);
        }
    }
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
