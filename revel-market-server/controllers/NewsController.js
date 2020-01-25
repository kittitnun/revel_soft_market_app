var NewsModel = require('../models/NewsModel');

var Task = function (task) {
    this.task = task.task;
};

Task.getNewsBy = async function getNewsBy(data, result) {
    var newsList = await NewsModel.getNewsBy(data);
    result(newsList);
}
Task.getNewsShowBy = async function getNewsShowBy(data, result) {
    var newsList = await NewsModel.getNewsShowBy(data);
    result(newsList);
}
Task.getNewsByNewsCode = async function getNewsByNewsCode(data, result) {
    var news = await NewsModel.getNewsByNewsCode(data);
    result(news);
}
Task.insertNews = async function insertNews(data, result) {
    var last_code = await NewsModel.getLastCode();
    var response = await NewsModel.insertNews(data,last_code);
    response.news_code = last_code;
    result(response);
}
Task.updateNewsByNewsCode = async function updateNewsByNewsCode(data, result) {
    var response = await NewsModel.updateNewsByNewsCode(data);
    result(response);
}
Task.deleteNewsByNewsCode = async function deleteNewsByNewsCode(data, result) {
    var response = await NewsModel.deleteNewsByNewsCode(data);
    result(response);
}

module.exports = Task;