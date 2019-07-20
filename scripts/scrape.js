var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
  return axios.get("https://www.gameinformer.com/").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    var articles = [];

    $(".article-summary").each(function(i, element) {
      var head = $(this)
        .find("h3")
        .text()
        .trim();

      var url = $(this)
        .find("a")
        .attr("href");

      var sum = $(this)
        .find("a")
        .text()
        .trim();

      if (head && sum && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.gameinformer.com/" + url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;