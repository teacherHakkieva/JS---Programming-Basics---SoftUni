function number100200(input) {
    if (input < 100) {
        console.log('Less than 100');
    } else if (input > 200) {
        console.log('Greater than 200');
    } else {
        console.log('Between 100 and 200');
    }
}
number100200(['95']);
number100200(['120']);
number100200(['210']);