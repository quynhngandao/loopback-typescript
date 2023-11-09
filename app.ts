function LoggerAndReturn<T>(thing: T) : T {
    return thing;
}

// const message: string = LoggerAndReturn<string>('Hello world');
const message: string = LoggerAndReturn('Hello world');
const message2: number = LoggerAndReturn(2)
console.log(message);
console.log(message2);