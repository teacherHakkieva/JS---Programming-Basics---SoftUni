function workingHours(input) {
    hour = Number(input[0]);
    days = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (days) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
                default:   console.log('closed');
                break;
        }

    } else {
        console.log('closed');
    }
}


