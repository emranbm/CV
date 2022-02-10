var config = require('./config.json')
exports.header = {
    height: "2.0cm",
    contents: function (pageNum, totalPages) {
        return "<span style='float:left; font-size: 8px'><i>Last updated at " + config.lastUpdateTime + "</i></span>"
    }
}
exports.footer = {
    height: "2.0cm",
    contents: function (pageNum, totalPages) {
        return "<span style='float:right; font-size: 8px'>Page " + pageNum + " of " + totalPages + "</span>"
    }
}
