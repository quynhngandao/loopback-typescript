function getArray(items) {
    return new Array().concat(items);
}
// let myNumArr = getArray<number>([100,200,300]);
// let myStArr = getArray<string>(['Hello', 'World']);
var myNumArr = getArray([100, 200, 300]);
var myStArr = getArray(['Hello', 'World']);
console.log(myNumArr);
console.log(myStArr);
myNumArr.push('Hello');
myStArr.push(1);
