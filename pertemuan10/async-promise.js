const persiapan = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("persiapan")
        },3000);
    });
};
const rebusAir = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("rebusAir")
        },7000);
    });
};
const masak = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("masak")
        },5000);
    });
};

const main = () =>{
    persiapan()
        .then((res)=>{
            console.log(res);
            return rebusAir();
        })
        .then((res)=>{
            console.log(res);
            return masak();
        })
        .then((res)=>{
            console.log(res);
        })
}

const second = async () => {
    const hasilpersiapan = await persiapan ();
    console.log(hasilpersiapan);

    const hasilrebusAir = await rebusAir ();
    console.log(hasilrebusAir);

    const hasilmasak = await masak ();
    console.log(hasilmasak);
}
second();
