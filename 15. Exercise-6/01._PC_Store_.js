function examp1(input) {
    let priceProcessorDol=Number(input[0]);
    let priceVideoCartDol=Number(input[1]);
    let priceRAMDol=Number(input[2]);
    let countRam=Number(input[3]);
    let discountProsent=Number(input[4]);
    let leva=1.57;

    let sumPocesorVideoCart =(priceProcessorDol+priceVideoCartDol)-(priceProcessorDol+priceVideoCartDol)*discountProsent;
    let allPrice=(sumPocesorVideoCart+priceRAMDol*countRam )*leva;
    console.log(`Money needed - ${allPrice} leva.`); 
}
examp1(['500',
    '200',
    '80',
    '2',
    '0.05'
     ])