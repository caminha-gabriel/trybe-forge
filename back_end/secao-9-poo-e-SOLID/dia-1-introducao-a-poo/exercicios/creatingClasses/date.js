"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const months_1 = __importDefault(require("./months"));
function validDateFormat(day, month, year) {
    return (day >= 1 && day <= 31)
        && (month >= 1 && month <= 12)
        && (year >= 1 && year <= 2999);
}
class calendarDate {
    constructor(day, month, year) {
        if (validDateFormat(day, month, year)) {
            this.day = day;
            this.month = month;
            this.year = year;
        }
        else {
            this.day = 1;
            this.month = 1;
            this.year = 1900;
        }
    }
    getMonthName() {
        return months_1.default[this.month - 1];
    }
    isLeapYear() {
        return this.year % 4 === 0;
    }
    compare(otherDate) {
        const currentDateFormat = `${this.year}-${this.month}-${this.day}`;
        const otherDateFormat = `${otherDate.year}-${otherDate.month}-${otherDate.day}`;
        if (new Date(currentDateFormat) > new Date(otherDateFormat))
            return 1;
        if (new Date(currentDateFormat) < new Date(otherDateFormat))
            return -1;
        return 0;
    }
}
const date1 = new calendarDate(2, 4, 1932);
const date2 = new calendarDate(12, 12, 2011);
console.log('firstDate:', date1);
console.log('month:', date1.getMonthName());
console.log('isLeapYear:', date1.isLeapYear());
console.log('comparison:', date1.compare(date2));
