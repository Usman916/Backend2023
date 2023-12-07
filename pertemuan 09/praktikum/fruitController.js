// import data
const fruits =require('./data.js')

// console.log(fruits);

// mathod index
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};
//menambahkan data mathod store
const store = (name) => {
    fruits.push(name);
    
    index()
};
// update method
const update = (index, update) => {
    if (index < 0 || index >= fruits.length) {
    
    return;
    }

    fruits[index] = update;

};
// destroy method
const destroy = (name) => {
    
    fruits.length = 1;

};

module.exports = { index, store, update, destroy };


