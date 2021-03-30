let Users = require('../models/usersmodel.js');
let Productserver = require('../models/productservermodel.js');
let Diachi = require('../ntcmodules/tradiachimodule.js');
let tolink = require('../validate/xoadauchuyenlink.js');

module.exports.index = async function(req, res){

let boganmat = await Productserver.find({"loaisanpham" : "Bổ Gan Mật"});
let bomoctoc = await Productserver.find({"loaisanpham" : "Bổ Mọc Tóc"});
let comchotrebiengan = await Productserver.find({"loaisanpham" : "Cốm Cho Trẻ Biếng Ăn"});
let collagen = await Productserver.find({"loaisanpham" : "Collagen"});
let botrinao = await Productserver.find({"loaisanpham" : "Bổ Trí Não"});
let bomat = await Productserver.find({"loaisanpham" : "Bổ Mắt"});
let boxuongkhop = await Productserver.find({"loaisanpham" : "Bổ Xương Khớp"});
let duongtieuhoa = await Productserver.find({"loaisanpham" : "Đường Tiêu Hóa"});
let giamcanantoan = await Productserver.find({"loaisanpham" : "Giảm Cân An Toàn"});
let sinhlynam = await Productserver.find({"loaisanpham" : "Sinh Lý Nam"});
let sinhlynu = await Productserver.find({"loaisanpham" : "Sinh Lý Nữ"});
let tieuduongmomau = await Productserver.find({"loaisanpham" : "Tiểu Đường Mỡ Máu"});
let thannieu = await Productserver.find({"loaisanpham" : "Thận Niệu"});
let timmachhuyetap = await Productserver.find({"loaisanpham" : "Tim Mạch Huyết Áp"});
let tangcanantoan = await Productserver.find({"loaisanpham" : "Tăng Cân An Toàn"});
let viemduonghohap = await Productserver.find({"loaisanpham" : "Viêm Đường Hô Hấp"});
let nhansamlinhchi = await Productserver.find({"loaisanpham" : "Nhân Sâm Linh Chi"});
let dongtrunghathao = await Productserver.find({"loaisanpham" : "Đông Trùng Hạ Thảo"});
let vienuongtrangda = await Productserver.find({"loaisanpham" : "Viên Uống Trắng Da"});
let vitaminkhoangchat = await Productserver.find({"loaisanpham" : "Vitamin Khoáng Chất"});
const ssp = 6;
botrinao = botrinao.slice(0,ssp);
collagen = collagen.slice(0,ssp);
bomat = bomat.slice(0,ssp);
boxuongkhop = boxuongkhop.slice(0,ssp);
duongtieuhoa = duongtieuhoa.slice(0,ssp);
giamcanantoan = giamcanantoan.slice(0,ssp);
sinhlynam = sinhlynam.slice(0,ssp);
sinhlynu = sinhlynu.slice(0,ssp);
tieuduongmomau = tieuduongmomau.slice(0,ssp);
thannieu = thannieu.slice(0,ssp);
timmachhuyetap = timmachhuyetap.slice(0,ssp);
tangcanantoan = tangcanantoan.slice(0,ssp);
viemduonghohap = viemduonghohap.slice(0,ssp);
nhansamlinhchi = nhansamlinhchi.slice(0,ssp);
dongtrunghathao = dongtrunghathao.slice(0,ssp);
vienuongtrangda = vienuongtrangda.slice(0,ssp);
vitaminkhoangchat= vitaminkhoangchat.slice(0,ssp);
comchotrebiengan= comchotrebiengan.slice(0,ssp);
boganmat= boganmat.slice(0,ssp);
bomoctoc= bomoctoc.slice(0,ssp);

res.render('users/forclient/index',{
	botrinao : botrinao,
	collagen : collagen,
	bomat : bomat,
	boxuongkhop : boxuongkhop,
	duongtieuhoa : duongtieuhoa,
	giamcanantoan : giamcanantoan,
	sinhlynam : sinhlynam,
	sinhlynu : sinhlynu,
	tieuduongmomau : tieuduongmomau,
	thannieu : thannieu,
	timmachhuyetap : timmachhuyetap,
	tangcanantoan : tangcanantoan,
	viemduonghohap : viemduonghohap,
	nhansamlinhchi : nhansamlinhchi,
	dongtrunghathao : dongtrunghathao,
	vienuongtrangda : vienuongtrangda,
	vitaminkhoangchat: vitaminkhoangchat,
	comchotrebiengan: comchotrebiengan,
	boganmat: boganmat,
	bomoctoc: bomoctoc
});
};


module.exports.search = async function(req, res){
let q = tolink.chuyenthanhlink(req.query.q);

let productserver = await Productserver.find();

let sanpham = productserver.filter(function(item){
let tg = tolink.chuyenthanhlink(item.tensanpham)
return tg.indexOf(q)!== -1;
})

res.render('users/forclient/search',{
	sanpham: sanpham
});
};

module.exports.googlesearchconsole = function(req, res){
res.send('google-site-verification: google17f04c91bb3db137.html')
};

