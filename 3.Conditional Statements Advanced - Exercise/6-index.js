function OperationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operation = input[2];
    let result = 0;
    let type;
    switch (operation) {
        case '+':
            result = n1 + n2;
            if (result % 2 == 0) {
                type = 'even';
            } else {
                type = 'odd';
            }
            console.log(`${n1} ${operation} ${n2} = ${result} - ${type}`);
            break;
        case '-':
            result = n1 - n2;
            if (result % 2 == 0) {
                type = 'even'
            } else {
                type = 'odd'
            }
            console.log(`${n1} ${operation} ${n2} = ${result} - ${type}`);
            break;
        case '*':
            result = n1 * n2;
            if (result % 2 == 0) {
                type = 'even';
            } else {
                type = 'odd';
            }
            console.log(`${n1} ${operation} ${n2} = ${result} - ${type}`);
            break;
        case '/':
            if (n2==0) {
                console.log(`Cannot divide ${n1} by zero`);
            }else{
                result=n1/n2;
                console.log(`${n1} ${operation} ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case '%':
            if (n2==0) {
                console.log(`Cannot divide ${n1} by zero`);
            }else{
                result=n1%n2;
                console.log(`${n1} ${operation} ${n2} = ${result}`);
            }
            break;
        default:
            break;
    }
    
}
OperationsBetweenNumbers(["10", "12", "+"]);
OperationsBetweenNumbers(["10", "1", "-"]);
OperationsBetweenNumbers(["7", "3", "*"]);
OperationsBetweenNumbers(["123", "12", "/"]);
OperationsBetweenNumbers(["10", "3", "%"]);
OperationsBetweenNumbers(["112", "0", "/"]);
OperationsBetweenNumbers(["10", "0", "%"]);
