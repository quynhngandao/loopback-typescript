var p = { first: '10K', second: 1000 };
console.log(p);
var person = { first: 'Jane', second: 'Malik' };
console.log(person);
var c = {
    id: Math.random().toString(36),
    run: function () {
        return 3;
    }
};
console.log(c.id);
console.log(c.run());
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] == toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 1);
console.log(b); // false, at index 1, it is 3 not 5
var b2 = checker(items, 5, 2);
console.log(b2); // true , at index of 2, it is 5
var s = { enabled: true, maximized: false };
console.log(s);
console.log(s['maximized']);
