

//Solution with Callback

const persiapan = () => {
    console.log("Persiapan memasak ,mie");
}

const rebusAir = () => {
    console.log("rebus air biar matang");
}

const masak = () => {
    console.log("Masak mie sampai matang");
    console.log("selesai");
}

const main = () => {
    setTimeout(()=>{
        persiapan();
    
        setTimeout(()=>{
            rebusAir();
    
            setTimeout(()=>{
                masak();
            },5000);
        },7000);
    },3000);
};

main();