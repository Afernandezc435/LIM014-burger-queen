import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Note from "./Note";

test("render content", () => {
  const note = {
    content: "This is a test",
    important: true,
  };
  const component = render(<Note note={note} />);
  console.log(component);
});

/*const text = "Hola Mundo";
const fruits = ["manzana", "banana", "melon"];

test("Debe ser una funcion", () => {
  expect(text).toMatch(/Hola Mundo/);
});

test("Tenemos una banana", () => {
  expect(fruits).toContain("banana");
});

test("verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error "));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Probar promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});*/
