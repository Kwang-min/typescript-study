"use strict";
var Circle = /** @class */ (function () {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius); // 에러 없이 작동
// console.log(rectangle.width); // width 가 private 이기 때문에 에러 발생!
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: '김사람',
    age: 20
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
