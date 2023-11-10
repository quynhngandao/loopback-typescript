function property(target: any, key: string) {
  let value = target[key];
  // replacement getter
  const getter = function () {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  };
  // replacement setter
  const setter = function (newVal) {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal;
  };
  // replace the property
  const isDeleted = delete this[key];
  if (isDeleted) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}
function parameterDecorator(target:any, key:string, index:number){
  console.log(`Key is ${key} and index is ${index}`);
}

function model(constructor: function){
  console.log(constructor);
}
@model
class Person {
  @property // decorator
  public firstName: string;
  @property // decorator
  public salary: number;

  calculatorSalary(@parameterDecorator taxes: number): number {
    return this.salary + taxes;
  }
}

const person = new Person();
// set the firstName
person.firstName = "Haider";
// call the getter
console.log(person.firstName);

