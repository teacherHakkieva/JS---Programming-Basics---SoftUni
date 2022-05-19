function easterEggsBattle(input) {
    index = 0;
    let eggsOne = Number(input[index]);
    index++;
    let eggsTwo = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    while (command !== 'End of battle') {
        if (eggsOne<=0) {
            console.log(`Player one is out of eggs. Player two has ${eggsTwo} eggs left.`);
            break;
        }else if (eggsTwo<=0) {
            console.log(`Player two is out of eggs. Player one has ${eggsOne} eggs left.`);
            break;
        }
        if (command === 'one') {
            eggsTwo--;
            command = input[index];
            index++;
        } else if (command === 'two') {
            eggsOne--;
            command = input[index];
            index++
        }
    }
    if (command === 'End of battle') {
        console.log(`Player one has ${eggsOne} eggs left.`);
        console.log(`Player two has ${eggsTwo} eggs left.`);
    }
}
easterEggsBattle(['5', '4', 'one', 'two', 'one', 'two', 'two', 'End of battle']);