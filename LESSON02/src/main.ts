let fullname: string = "Maulana Akbar Yudistika";
let birthDate: number;
let isLoading: boolean;
let musician: any;
let album: string | number; // Union

fullname = "John";
birthDate = 12;
isLoading = true;
musician = 1223;
album = 9021238;

let postId: string | number;
let isActive: number | boolean | string;

isActive = "true";

let re: RegExp = /\w+/g;

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(40, 1));
// console.log(sum("String", 1));
// console.log(fullname);
