const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shop.controllers');

router.get('/', shopControllers.shop);
router.get('/item/:id', (req, res) => res.send('Route for find and retrieve a product from an ID'));
router.post('/item/:id/add', (req, res) => {
    const {quantity} = req.body;
    res.send('cantidad de item seleccionados ' + quantity);
});
router.get('/cart', shopControllers.cart);
router.post('/cart', (req, res) => {
    const {cantElemento, subtotal, envio, total} = req.body;
    res.send('su total a pagar ' + total);
});
module.exports = router;
