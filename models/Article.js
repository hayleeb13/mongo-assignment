var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  link: {
    type: String,
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  },
  saved: {
    type: Boolean,
    default: false
  }

});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;