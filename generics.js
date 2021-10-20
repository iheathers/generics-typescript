var ArrayOfNumber = /** @class */ (function () {
    function ArrayOfNumber(collection) {
        this.collection = collection;
    }
    ArrayOfNumber.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumber;
}());
var numbers = new ArrayOfNumber([1, 2, 3, 4, 6]);
var result = numbers.get(0);
// console.log({ result });
var ArrayOfString = /** @class */ (function () {
    function ArrayOfString(collection) {
        this.collection = collection;
    }
    ArrayOfString.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfString;
}());
var strings = new ArrayOfString(['a', 'b', 'c', 'd']);
var string = strings.get(3);
// console.log({ string });
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var anything = new ArrayOfAnything([1, 2, 'c']);
// console.log('Anything', anything.get(1));
function printAnything(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var char = arr_1[_i];
        console.log({ char: char });
    }
}
printAnything(['1', 'b']);
// Generic Contraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a car');
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a house');
    };
    return House;
}());
function printInfo(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printInfo([new Car(), new Car()]);
