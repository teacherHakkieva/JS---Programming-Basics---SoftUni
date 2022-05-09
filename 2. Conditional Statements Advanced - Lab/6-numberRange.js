function numberRange(input) {
    num = Number(input[0]);
    if (num == 0) {
        console.log('No');
    } else if (num >= -100 && num <= 100) {
        console.log('Yes');
    } else {
        console.log('No');
    }
} numberRange(['-25']);
numberRange(['1110'])
numberRange(['25'])