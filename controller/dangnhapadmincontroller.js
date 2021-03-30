var md5 = require('md5');
var Users = require('../models/usersmodel.js');


module.exports.login= function(req, res){
res.render('auth/loginadmin');

};
module.exports.postLogin = async function(req, res){
	var email = req.body.email;
	var password = req.body.password;

	if (email!== "phanduchupdkh@gmail.com"){
		res.render('auth/loginadmin');
		return;
	};
	

	if (password !== "nemmatnamgai198"){
		res.render('auth/loginadmin');
		return;
	}
res.cookie('adminId', "toilaphanxuanduc",{signed: true});

res.redirect('/adminn');
};
