"use strict";
class Student {
    constructor(registration, name, avaliation1, avaliation2, avaliation3, avaliation4, project1, project2) {
        this.registration = registration;
        this.name = name;
        this.avaliation1 = avaliation1;
        this.avaliation2 = avaliation2;
        this.avaliation3 = avaliation3;
        this.avaliation4 = avaliation4;
        this.project1 = project1;
        this.project2 = project2;
    }
    sum() {
        return this.avaliation1 + this.avaliation2 + this.avaliation3 + this.avaliation4 + this.project1 + this.project2;
    }
    average() {
        return this.sum() / 6;
    }
}
