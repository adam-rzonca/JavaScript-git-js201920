"use strict";

const { board } = require("./ExamInput1.js");
const PingPong = require("./PingPong");

const pingPong = new PingPong(board);

pingPong.play();
