const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for Create View'),
    cart: (req, res) => res.send('Route for cart View'),
}
module.exports = adminControllers;