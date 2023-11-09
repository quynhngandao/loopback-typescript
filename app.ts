function getArray<T>(items: T[]) : T[] {
    return new Array<T>().concat(items);
}

// let myNumArr = getArray<number>([100,200,300]);
// let myStArr = getArray<string>(['Hello', 'World']);
let myNumArr = getArray([100,200,300]);
let myStArr = getArray(['Hello', 'World']);

console.log(myNumArr);
console.log(myStArr);
// myNumArr.push('Hello');  // compiler error
// myStArr.push(1);