function sequence2k1(input) {
  let countNum = 1;
  let sum = 0
  let index = Number(input[0]);

  while (sum <= index) {
    sum = 2 * sum + 1;
    countNum++;
    if (sum > index) {
      break;
    }
    console.log(sum);
  }

}
sequence2k1(["17"])