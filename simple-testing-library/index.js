// Import stylesheets
import "./style.css";

const sum = (a, b) => a + b;
const subract = (a, b) => a - b;

let actual, expected;

test("2 + 2 === 4", () => ensure(4).isEqual("4"));

function test(name, callback) {
  try {
    callback();
    console.log(`SUCCEEDED: ${name}`);
  } catch (error) {
    console.error(`FAILURE: ${name}`);
    console.error(error);
  }
}

function ensure(actual) {
  return {
    isEqual(expected) {
      if (actual.toString() !== expected.toString()) {
        throw new Error(
          `${actual} ${typeof actual} is not equal to ${expected} ${typeof expected}`
        );
      }
    }
  };
}
