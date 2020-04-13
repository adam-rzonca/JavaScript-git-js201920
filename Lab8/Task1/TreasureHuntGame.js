// +-------------------------+
// ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
// +----+----+----+----+-----¦
// ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
// +----+----+----+----+-----¦
// ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
// +----+----+----+----+-----¦
// ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
// +----+----+----+----+-----¦
// ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
//  +-------------------------+
// 1) Do you like treasure hunts?
// In this problem you are to write a program to explore the above array for a treasure.
// The values in the array are clues. Each cell contains an integer between 11 and 55.
// For each value the ten's digit represents the row number and the unit's digit represents
// the column number of the cell containing the next clue.
// Starting in the upper left corner (at 1,1), use the clues to guide your search of the array.
// (The first three clues are 11, 34, 42).
// The treasure is a cell whose value is the same as its coordinates.
// Your program should output the cells it visits during its search,
// and a message indicating where you found the treasure.
"use strict";

const treasureMap = require("./TreasureMap.js");
const Position = require("./Position.js");
const TreasureGame = require("./TreasureGame.js");

const startPosition = new Position(1, 1);
const treasureGame = new TreasureGame(treasureMap, startPosition);

treasureGame.solve();
