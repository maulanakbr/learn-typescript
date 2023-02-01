// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArr = (string | number)[];

type Movies = {
  id: number;
  title: string;
  price?: number; // number | undefined
  company: stringOrNumberArr;
  rating: stringOrNumber;
  isReleased: boolean;
};

type userId = stringOrNumber;

// Literal Types
let shortName: "Will";

let userName: "Bob" | "Hind" | "Rachel";
// userName = "Den";
userName = "Bob";

// Functions
const add = (a: number, b: number): number => {
  // Return number as the result
  return a + b;
};

const logMsg = (message: any): void => {
  // Void (Do not return anything)
  console.log(message);
};

let subtract = function (a: number, b: number): number {
  return a - b;
};

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (a, b) {
  return a * b;
};

const addMultipleItems = (a: number, b: number, c?: number): number => {
  // Optional Parameters
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

const subtractMultipleItems = (
  // Default Parameters
  a: number = 20,
  b: number,
  c: number = 2
): number => {
  return a - b - c;
};

const total = (a: number, ...nums: number[]): number => {
  // Rest Parameters
  return a + nums.reduce((prev, curr) => prev + curr);
};

const createError = (errMsg: string): never => {
  // The Never Type
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isNumber = (value: any): boolean => {
  // Custom Type Guard
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  // The Never Type
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";

  return createError("This is not what we expected");
};

logMsg(userName);
logMsg(add(2, 3));
// logMsg(add("a", 3));
logMsg(subtract(400, 822));
logMsg(multiply(10, 332));
// logMsg(addMultipleItems(233, 332));
logMsg(addMultipleItems(233, 332, 20838));
// logMsg(subtractMultipleItems(12, 2));
// logMsg(subtractMultipleItems(12, 20, 3));
logMsg(subtractMultipleItems(undefined, 20, 3));
logMsg(total(90, 23, 38, 82, 33, 66));
logMsg(numberOrString("Lalala"));
// logMsg(numberOrString(true));
