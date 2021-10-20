class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

const numbers = new ArrayOfNumber([1, 2, 3, 4, 6]);
const result = numbers.get(0);

// console.log({ result });

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

const strings = new ArrayOfString(['a', 'b', 'c', 'd']);
const string = strings.get(3);

// console.log({ string });

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const anything = new ArrayOfAnything([1, 2, 'c']);
// console.log('Anything', anything.get(1));

function printAnything<T>(arr: T[]): void {
  for (let char of arr) {
    console.log({ char });
  }
}

printAnything<string>(['1', 'b']);

// Generic Contraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printInfo<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printInfo<Car>([new Car(), new Car()]);
