function examp2(input) {
    let tShirts = Number(input[0]);
    let targetSum = Number(input[1]);

    let shorts = tShirts * 0.75;
    let socks = shorts * 0.20;
    let buttons = 2 * (shorts + tShirts);
    let check = tShirts + shorts + socks + buttons;
    check = check - check * 0.15;

    if (targetSum < check) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${check.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(targetSum - check).toFixed(2)} lv. more.`);
    }
}
examp2(['55', '310'])
