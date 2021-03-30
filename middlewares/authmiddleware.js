let Users = require('../models/usersmodel.js');
let Companys = require('../models/companysmodel.js');

module.exports.requireAuth = async function(req, res, next){
	if (!req.signedCookies.userId){
		res.redirect('/auth/login');
		return;
	};

	let users = await Users.find();

	let user =  users.find(function(user) {
	return user.id == req.signedCookies.userId ;
});


	if (!user){
	res.redirect('/auth/login')
	return;
	}
	res.locals.user=user;
	next();
};

module.exports.requireadminAuth = async function(req, res, next){
	if (!req.signedCookies.adminId){
		res.redirect('/adminauth/login');
		return;
	};
	if ("toilaphanxuanduc"!==req.signedCookies.adminId){
		res.redirect('/adminauth/login');
		return;
	};
	next();
};

module.exports.requireAuthCompany= async function(req, res, next){
	if (!req.signedCookies.companyId){
		res.redirect('/auth/logincompany');
		return;
	};

	let  companys = await Companys.find();

	let company =  companys.find(function(comp) {
	return comp.id == req.signedCookies.companyId ;
});


	if (!company){
	res.redirect('/auth/logincompany')
	return;
	}
	next();
};