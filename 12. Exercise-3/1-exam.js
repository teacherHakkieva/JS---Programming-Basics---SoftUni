function easterLunch(input) {
    let easterCake = 3.20;
    let eggShell = 4.35;
    let cookies = 5.40;
    let paintEgsgs = 0.15;
    let countEasterCake = Number(input[0]);
    let countEggsShell = Number(input[1]);
    let kgCookies = Number(input[2]);
    let output=0;

    output =((easterCake*countEasterCake)
        +(eggShell*countEggsShell)+
        +(cookies*kgCookies)+
        ((countEggsShell*12)*paintEgsgs));
        console.log(output.toFixed(2));
}
easterLunch(['3','2','3']);
easterLunch(['4','4','3']);