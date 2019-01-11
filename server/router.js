module.exports = function(app){
    app.get('/', function(req, res, next){
        //the function for .get gets passed with three important parameters req, result, next
         res.send(['WaterBottle', 'Phone', 'Paper']);
    });
}