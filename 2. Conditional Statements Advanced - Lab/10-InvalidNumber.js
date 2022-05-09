function invalidNumber(input) {
    num = Number(input[0]);
    if (((num > 200) || (num < 100)) && (num !==0)) {

        console.log('invalid');
    }
}

InvalidNumber(["75"]);
InvalidNumber(["150"]);
InvalidNumber(["220"]);
InvalidNumber(["199"]);
InvalidNumber(["-1"]);
InvalidNumber(["100"]);
InvalidNumber(["200"]);
InvalidNumber(["0"]);