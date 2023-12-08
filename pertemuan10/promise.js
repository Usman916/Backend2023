/** Membuat fungsi dwonload
 *@returns{object} Promise
 */

const dwonload = () => {
    return new Promise((resolve, reject)=>{
        const status = true;

        setTimeout(()=>{
            if(status){
                resolve("Dwonload selesai");
            }else {
                reject("Gagal dwonload");
            }
        },5000);
    });
};

console.log(dwonload());