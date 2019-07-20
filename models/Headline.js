var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String
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

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;