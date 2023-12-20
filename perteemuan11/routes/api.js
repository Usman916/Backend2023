//inport student controller
const StudentController = require('../controllers/StudentController');

//inport express
const express = require('express');
const router = express.Router();

//mendefinisikan route
router.get('/', (req, res) => {
    res.send('Hello Word Ini Saya');
});

//routing student
router.get('/students', StudentController.index);
router.post('/students', StudentController.store);
router.put('/students', StudentController.update);
router.delete('/students', StudentController.destroy);

//export rotter
module.exports = router;

