var users = function(conf){
        conf = conf || {}
}

users.prototype.index = function(res, object){
        res.render('index',{});
}
users.prototype.login = function(res, object){
        res.render('login',{});
}

module.exports = users;