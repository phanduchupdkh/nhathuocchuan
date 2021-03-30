let Users = require('../../models/usersmodel.js');
let Productserver = require('../../models/productservermodel.js');
let Donhang = require('../../models/donhangmodel');
let Company = require('../../models/companysmodel');

module.exports.productsv = async function (req, res) {
    productsv = await Productserver.find();
    res.json(productsv);
};

module.exports.users = async function (req, res) {
    users = await Users.find();

    // users = users.map(function (item) {
    //     let apinhathuoc = {};
    //     apinhathuoc.tennhathuoc = item.tennhathuoc;
    //     apinhathuoc.idnt = item.idnt;
    //     apinhathuoc.phone = item.phone;
    //     apinhathuoc.address = item.address;
    //     apinhathuoc.maxaphuong = item.maxaphuong;
    //     apinhathuoc.xaphuong = item.xaphuong;
    //     apinhathuoc.quanhuyen = item.quanhuyen;
    //     apinhathuoc.maquanhuyen = item.maquanhuyen;
    //     apinhathuoc.tinhthanh = item.tinhthanh;
    //     apinhathuoc.matinhthanh = item.matinhthanh;
    //     apinhathuoc.danhsachsp = item.danhsachsp;

    //     return apinhathuoc;
    // });
    res.json(users);
};

module.exports.donhang = async function (req, res) {
    donhang = await Donhang.find();
    res.json(donhang);
};

module.exports.companys = async function (req, res) {
    companys = await Company.find();
    res.json(companys);
};
