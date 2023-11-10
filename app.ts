function log(title: string) {
    return function(target, key, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    // call the origin method
    const result = original.apply(this, args);
    // log the call, and the result
    console.log(`title ${title} ${key} with args ${JSON.stringify(args)} returned
        ${JSON.stringify(result)}`);
    // return the result
    return result;
  };
  return descriptor;
};
}

class Calculator {
  // Using thing decorator @log
  @log('Calculator')
  square(n: number) {
    return n * n;
  }
}

const calculator = new Calculator();
// square with args [2] returned 4
calculator.square(2);
// square with args [3] returned 9 
calculator.square(3);