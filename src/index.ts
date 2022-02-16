import { Colletion } from './collection';

const collection = new Colletion(3);
console.log(collection.next(1));
console.log(collection.next(10));
console.log(collection.next(3));
console.log(collection.next(5));
