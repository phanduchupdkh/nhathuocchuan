let Users = require('../models/usersmodel.js');
let Productserver = require('../models/productservermodel.js');
let Diachi = require('../ntcmodules/tradiachimodule.js');
let tolink = require('../validate/xoadauchuyenlink.js');

module.exports.index = async function (req, res) {
	const ssp = 6;
	let boganmat = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Bổ Gan Mật" } },
		{ $limit: ssp }
	])
	let bomoctoc = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Bổ Mọc Tóc" } },
		{ $limit: ssp }
	])
	let comchotrebiengan = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Cốm Cho Trẻ Biếng Ăn" } },
		{ $limit: ssp }
	])
	let collagen = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Collagen" } },
		{ $limit: ssp }
	])

	let botrinao = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Bổ Trí Não" } },
		{ $limit: ssp }
	])

	let bomat = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Bổ Mắt" } },
		{ $limit: ssp }
	])

	let boxuongkhop = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Bổ Xương Khớp" } },
		{ $limit: ssp }
	])

	let duongtieuhoa = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Đường Tiêu Hóa" } },
		{ $limit: ssp }
	])

	let giamcanantoan = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Giảm Cân An Toàn" } },
		{ $limit: ssp }
	])

	let sinhlynam = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Sinh Lý Nam" } },
		{ $limit: ssp }
	])
	let sinhlynu = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Sinh Lý Nữ" } },
		{ $limit: ssp }
	])
	let tieuduongmomau = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Tiểu Đường Mỡ Máu" } },
		{ $limit: ssp }
	])
	let thannieu = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Thận Niệu" } },
		{ $limit: ssp }
	])
	let timmachhuyetap = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Tim Mạch Huyết Áp" } },
		{ $limit: ssp }
	])
	let tangcanantoan = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Tăng Cân An Toàn" } },
		{ $limit: ssp }
	])
	let viemduonghohap = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Viêm Đường Hô Hấp" } },
		{ $limit: ssp }
	])
	let nhansamlinhchi = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Nhân Sâm Linh Chi" } },
		{ $limit: ssp }
	])
	let dongtrunghathao = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Đông Trùng Hạ Thảo" } },
		{ $limit: ssp }
	])
	let vienuongtrangda = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Viên Uống Trắng Da" } },
		{ $limit: ssp }
	])
	let vitaminkhoangchat = await Productserver.aggregate([
		{ $match: { "loaisanpham": "Vitamin Khoáng Chất" } },
		{ $limit: ssp }
	])

	res.render('users/forclient/index', {
		botrinao: botrinao,
		collagen: collagen,
		bomat: bomat,
		boxuongkhop: boxuongkhop,
		duongtieuhoa: duongtieuhoa,
		giamcanantoan: giamcanantoan,
		sinhlynam: sinhlynam,
		sinhlynu: sinhlynu,
		tieuduongmomau: tieuduongmomau,
		thannieu: thannieu,
		timmachhuyetap: timmachhuyetap,
		tangcanantoan: tangcanantoan,
		viemduonghohap: viemduonghohap,
		nhansamlinhchi: nhansamlinhchi,
		dongtrunghathao: dongtrunghathao,
		vienuongtrangda: vienuongtrangda,
		vitaminkhoangchat: vitaminkhoangchat,
		comchotrebiengan: comchotrebiengan,
		boganmat: boganmat,
		bomoctoc: bomoctoc
	});
};


module.exports.search = async function (req, res) {
	let q = tolink.chuyenthanhlink(req.query.q);

	let productserver = await Productserver.find();

	let sanpham = productserver.filter(function (item) {
		let tg = tolink.chuyenthanhlink(item.tensanpham)
		return tg.indexOf(q) !== -1;
	})

	res.render('users/forclient/search', {
		sanpham: sanpham
	});
};

module.exports.googlesearchconsole = function (req, res) {
	res.send('google-site-verification: google17f04c91bb3db137.html')
};

