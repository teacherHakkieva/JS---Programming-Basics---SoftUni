function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freePlace = width*length*height;
    let sumBox=0;
    let index=3;
    let command=input[index];
  
    while (command !=='Done') {
        if (freePlace>=sumBox) {
            command=Number(input[index]);
            sumBox+=command;
            index++;
            command=input[index];
        }else{
            let shortage = sumBox-freePlace;
            console.log(`No more free space! You need ${shortage} Cubic meters more.`);
            return;
        }
        
    }
    console.log(`${freePlace-sumBox} Cubic meters left.`);
}
moving(["10","10","2","20","20","20","20","122"]);
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

