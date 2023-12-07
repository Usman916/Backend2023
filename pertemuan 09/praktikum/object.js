// membuat variabel dengan const 
// membuat object dengan {}


// const user = {
//     nama : "wawan",
//     alamat : "tansew",
//     umur : 21,
//     nikah : false
// };  
// console.log(user.nama);
// console.log(user.nikah);


/*Membuat object literal*/
// const user = {
//     nama : 'usman',
//     age : 21,
//     major :'informatic'
// };

// const nama =user.nama;
// const age =user.age;
// const major=user.major;

// console.log(nama, age, major);



const user = {
    nama : 'usman',
    age : 21,
    major :'informatic'
};

/**Melakukan Ducktracing object */
const{nama, age, major} = user;
console.log(nama, age, major);