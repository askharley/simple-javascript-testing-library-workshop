import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

function test(name, callback) {
  try {
    callback();
    console.log(`SUCEEDED: ${name}`);
  } catch (error) {
    console.error(`FAILURE: ${name}`);
    console.error(error);
  }
}

function ensure(actual) {
  return {
    isEqual(expected) {
      if (actual !== expected) {
        throw new Error(
          `${actual} (${typeof actual}) is not equal to ${expected} (${typeof expected})`
        );
      }
    }
  };
}

const div = document.createElement("div");

document.body.append(div);

ReactDOM.render(<Counter />, div);

const [decrement, increment] = div.querySelectorAll("button");
const message = div.firstChild.querySelector("div");

test("Count is 0 at start", () => ensure(message.textContent).isEqual("0"));
increment.click();
test("Count is increased by 1", () => ensure(message.textContent).isEqual("1"));
decrement.click();
test("Count is decreased by 1", () => ensure(message.textContent).isEqual("0"));
