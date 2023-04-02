const mongoose = require("mongoose");

const KeySchema = new mongoose.Schema(
  {
    key: {
      type: String,
    },
    state: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const KeyModel = mongoose.model("Key", KeySchema);
module.exports = KeyModel;
