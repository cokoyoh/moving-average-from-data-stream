import { Colletion } from './collection';

const collection = new Colletion(3);
collection.next(1);
collection.next(10);
collection.next(3);

const value = collection.next(5);
console.log({ value });
