function LoggerAndReturn(thing) {
    return thing;
}
// const message: string = LoggerAndReturn<string>('Hello world');
var message = LoggerAndReturn('Hello world');
var message2 = LoggerAndReturn(2);
console.log(message);
console.log(message2);
