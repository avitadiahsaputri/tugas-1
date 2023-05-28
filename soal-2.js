const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const binatang = () => {
    return [...hewanBuas, ...hewanJinak]; //spread
}

let ikan,Wortel,biji;
const gabung = () => {
    [ikan,Wortel,biji] = hewanJinak;
    console.log(`${ikan}: ikan ,${Wortel}: wortel ,${biji}:   biji`)
}

setTimeout(() => {
   gabung();
}, 5000);