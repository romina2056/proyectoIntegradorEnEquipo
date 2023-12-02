const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin.controllers');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.create);
router.post('/create', (req, res) => {
    const {categoria, licencia, nombreProducto} = req.body;
    res.send('su nuevo producto es ' + nombreProducto)});
router.get('edit/:id', (req, res) => {
    const { id } = req.params;
    res.send('Route for find and retrieve a product from an ID')});
router.put('edit/:id', (req, res) => {
    const { id } = req.params;
    res.send('se guardo su información')});
router.delete('delete/:id',(req, res) => {
    const { id } = req.params;

    res.send(`Usted quiere eliminar su item: ${id}`)}),


module.exports = router;