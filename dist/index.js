"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uploadfiles_1 = __importDefault(require("./uploadfiles"));
var fileURL = "https://devfolio.co/never-stop-building.svg";
console.log((0, uploadfiles_1.default)(fileURL));
