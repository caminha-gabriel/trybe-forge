"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`Array sum is equal to ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triangle with 10cm of base and 25cm of height: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Triangle with 5cm of base and 30cm of height: ${Exercise.triangleArea(5, 30)}cm²`);
console.log(`Triangle with 100cm of base and 200cm of height: ${Exercise.triangleArea(100, 200)}cm²`);
console.log(`Square with 10cm side: ${Exercise.squareArea(10)}cm²`);
console.log(`Square with 5cm side: ${Exercise.squareArea(5)}cm²`);
console.log(`Square with 100cm side: ${Exercise.squareArea(100)}cm²`);
console.log(`Rectangle with 10cm of base and 25cm of height: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`Rectangle with 5cm of base and 30cm of height: ${Exercise.rectangleArea(5, 30)}cm²`);
console.log(`Rectangle with 100cm of base and 200cm of height: ${Exercise.rectangleArea(100, 200)}cm²`);
