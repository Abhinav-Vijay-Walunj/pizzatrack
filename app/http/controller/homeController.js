const Menu= require('../../models/menu');
// fetch menu model and as we have to give relative path we go one out and one out then 2 in  
function homeController(){
    return {
        // to use await keyword we have to use asynchronize function async keyword
        async index(req,res){
          
            const pizzas = await Menu.find();
            // here pizzas is an array of pizzas
            // find to get data records
            // console.log('pizzas are ',pizzas);
            return res.render('home',{pizzas: pizzas});
        }                           
    }
}


module.exports = homeController;