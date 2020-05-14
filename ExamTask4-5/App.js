"use strict";

const { board } = require("./ExamInput3.js");
const PingPong = require("./PingPong");

const pingPong = new PingPong(board);

pingPong.play();
