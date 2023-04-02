const fs = require("fs");
const { ethers } = require("ethers");
const KeyModel = require("../models/Key.model");
require("dotenv");

const methods = {
  add: async (req, res) => {
    const key = req.params.key;
    console.log(key);
    const newKey = new KeyModel({
      key,
    });

    const result = await newKey.save();
    res.send(result);
  },
  read: async (req, res) => {
    const data = await KeyModel.find();
    res.send(data);
  },
  delete: async (req, res) => {
    const id = req.body.id;
    const result = await KeyModel.findByIdAndRemove(id);
    res.send(result);
  },
  finish: async (req, res) => {
    const id = req.body.id;
    const result = await KeyModel.findByIdAndUpdate(id, { state: true });
    res.send(result);
  },
};
module.exports = methods;
