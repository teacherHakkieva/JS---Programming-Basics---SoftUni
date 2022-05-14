function examPreparation(input) {
    let countNoEvaluation = Number(input[0]);
    let index = 1;

    let averageEvaluation = 0;
    let countExamPos = 0;
    let countExamNeg = 0;
    let lastExam = '';
    let sum = 0;

    while (countExamNeg < countNoEvaluation) {
        let command = input[index];
        index++;
        if (command == 'Enough') {
            averageEvaluation = (sum / (countExamPos + countExamNeg)).toFixed(2);
            console.log(`Average score: ${averageEvaluation}`);
            console.log(`Number of problems: ${countExamNeg + countExamPos}`);
            console.log(`Last problem: ${lastExam}`);
            return;
        }
        lastExam = command;
        command = Number(input[index]);
        index++;
        if (command > 4) {
            countExamPos++;

        } else if (command <= 4) {
            countExamNeg++;
        }
        sum = sum + command;
    }
    console.log(`You need a break, ${countNoEvaluation} poor grades.`);
}
examPreparation(['4','Stone Age','5','Freedom','5','Storage','3','Enough'])
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);
