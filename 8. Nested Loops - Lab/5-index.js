function traveling(input) {
    index=0;
    for (let j = 0; j < input.length; j++) {
        let destination = input[index];
        index++;
        if (destination === 'End') {
            return;
        }
        let price = Number(input[index]);
        index ++;
        let command = input[index];
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            if (sum < price) {
                command = Number(input[index]);
                sum += command;
                index++;
            }else if (sum>=price) {
                console.log(`Going to ${destination}!`);
                break;
            }

        }
   
    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);