"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collection_1 = require("./collection");
var collection = new collection_1.Colletion(3);
collection.next(1);
collection.next(10);
collection.next(3);
var value = collection.next(5);
console.log({ value: value });
