const mainControllers = {
home: (req, res) => res.render(path.resolve(__dirname,'../view/home')),
    // res.render('home',{
    // title:"Home | funkos page"}),
contact:(req, res) => res.send('Route for Contact View'),
about:(req, res) => res.send('Route for About View'),
faqs:(req, res) => res.send('Route for Faqs View')
}
module.exports = mainControllers;