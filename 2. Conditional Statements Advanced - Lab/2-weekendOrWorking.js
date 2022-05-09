function weekendOrWorking(input) {
    days = input[0];
    switch (days) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Working day');

            break;
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend');
            break;

        default:
            console.log('Error');
            break;
    }
}
weekendOrWorking(['Monday']);
weekendOrWorking(['Tuesday']);
weekendOrWorking(['Wednesday']);
weekendOrWorking(['Thursday']);
weekendOrWorking(['Friday']);
weekendOrWorking(['Saturday']);
weekendOrWorking(['Sunday']);
weekendOrWorking(['Apple']);