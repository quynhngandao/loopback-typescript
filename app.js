var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function property(target, key) {
    var value = target[key];
    // replacement getter
    var getter = function () {
        console.log("Getter for ".concat(key, " returned ").concat(value));
        return value;
    };
    // replacement setter
    var setter = function (newVal) {
        console.log("Set ".concat(key, " to ").concat(newVal));
        value = newVal;
    };
    // replace the property
    var isDeleted = delete this[key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    }
}
var Person = /** @class */ (function () {
    function Person() {
    }
    __decorate([
        property // decorator
    ], Person.prototype, "firstName", void 0);
    return Person;
}());
var person = new Person();
// set the firstName
person.firstName = "Haider";
// call the getter
console.log(person.firstName);
