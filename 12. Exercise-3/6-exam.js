function easterCompetition(input) {
    let index = 0;
    let easterCakeCount = input[index];
    index++;
    let maxPoint = 0;
    let maxNameChef = '';
    for (let i = 0; i < easterCakeCount; i++) {

        let command = input[index];
        let nameChef = command;
        index++;
        let pointChef = 0;

        while (command !== 'Stop') {
            command = Number(input[index]);
            pointChef += command;
            index++;
            command = input[index];
        }
        console.log(`${nameChef} has ${pointChef} points.`);
        
        if (maxPoint < pointChef) {
            maxPoint = pointChef;
            maxNameChef = nameChef;
            console.log(`${nameChef} is the new number 1!`);
            index++;
        }else{
            index++;
        }
       
    }console.log(`${maxNameChef} won competition with ${maxPoint} points!`);
}
easterCompetition(['2',
    'Chef Angelov',
    '9',
    '9',
    '9',
    'Stop',
    'Chef Rowe',
    '10',
    '10',
    '10',
    '10',
    'Stop'
])