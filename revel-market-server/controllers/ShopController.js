var ShopModel = require('../models/ShopModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getShopBy = async function getShopBy(data, result) {
    var shopList = await ShopModel.getShopBy(data);
    result(shopList);
}
Task.getShopByShopCode = async function getShopByShopCode(data, result) {
    var shop = await ShopModel.getShopByShopCode(data);
    result(shop);
}
Task.insertShop = async function insertShop(data, result) {
    var last_code = await ShopModel.getLastCode();
    var response = await ShopModel.insertShop(data,last_code);
    response.shop_code = last_code;
    result(response);
}
Task.updateShopByShopCode = async function updateShopByShopCode(data, result) {
    var response = await ShopModel.updateShopByShopCode(data);
    result(response);
}
Task.deleteShopByShopCode = async function deleteShopByShopCode(data, result) {
    var response = await ShopModel.deleteShopByShopCode(data);
    result(response);
}
Task.getLastCode = async function getLastCode(data, result) {
    var response = await ShopModel.getLastCode(data);
    result(response);
}

module.exports = Task;