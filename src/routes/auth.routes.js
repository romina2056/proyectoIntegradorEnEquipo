const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth.controllers');

router.get('/login', authControllers.login);
router.post('/login', (req, res) => {
    const {user, password} = req.body;
    res.redirect('/')});
router.get('/register', authControllers.register);
router.post('/register', (req, res) => {
    const {nombre, apellido, email, pwd} = req.body;
    res.send('se registro con exito')});
router.get('/logout', authControllers.logout);

module.exports = router;