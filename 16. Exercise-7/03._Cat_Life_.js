function examp3(input) {
    let catBrees = input[0];
    let sexCat = input[1];
    let catMonths=0
    switch (catBrees) {
        case 'British Shorthair':
                if (sexCat === 'm') {
                    catMonths = 2*13;
                }else{
                    catMonths= 2*14;
                }
            break;
        case 'Siamese':
            if (sexCat === 'm') {
                catMonths = 2*15;
            }else{
                catMonths= 2*16;
            }
            break;
        case 'Persian':
            if (sexCat === 'm') {
                catMonths = 2*14;
            }else{
                catMonths= 2*15;
            }
            break;
        case 'Ragdoll':
            if (sexCat === 'm') {
                catMonths = 2*16;
            }else{
                catMonths= 2*17;
            }
            break;
        case 'American Shorthair':
            if (sexCat === 'm') {
                catMonths = 2*12;
            }else{
                catMonths= 2*13;
            }
            break;
        case 'Siberian':
            if (sexCat === 'm') {
                catMonths = 2*11;
            }else{
                catMonths= 2*12;
            }
            break;
    }
    console.log(`${catMonths} cat months`);
}
examp3(['Siberian', 'm']);


