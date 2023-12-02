const authControllers = {
    login: (req, res) => res.send('Route for Login View'),
    register: (req, res) => res.send('Route for Register View'),
    logout: (req, res) => res.send('Route for Logout View'),
}
module.exports = authControllers;