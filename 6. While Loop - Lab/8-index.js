function graduation(input) {
 
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
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
