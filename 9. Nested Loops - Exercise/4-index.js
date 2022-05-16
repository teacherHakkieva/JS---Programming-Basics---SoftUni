function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    let sumOfGrade = 0
    let counter = 0;
    while (command !== 'Finish') {

        let name = command;

        let temSumOfGrade = 0;
        for (let i = 0; i < people; i++) {
            counter++;
            index++;
            command = input[index];
            let grade = Number(input[index]);
            temSumOfGrade += grade;
            sumOfGrade += grade;
        }
        let avgTmep = temSumOfGrade / people;

        console.log(`${name} - ${avgTmep.toFixed(2)}.`);

        index++;
        command = input[index]
    }
    console.log(`Student's final assessment is ${(sumOfGrade / counter).toFixed(2)}.`);
}

trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])

