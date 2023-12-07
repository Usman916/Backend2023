//mengimport fruitController
//melakukan teknik destruckting objct
const { index, store, update, destroy } = require('./fruitController.js');

//membuat fungsi utama: main
const main = () => {
    index();
    store();
    update();
    destroy(0);
};

main();
