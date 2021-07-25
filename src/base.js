// import moment from "moment";

class Base {
  component(text, type = "div") {
    const element = document.createElement(type);
    element.innerHTML = `${text}-page`;
    // element.classList.add("frcc");
    // element.classList.add("fs-32");
    // console.log("this is error info info", moment().format());
    return element;
  }
}

export function cube(x) {
  return x * x;
}

export function square(x) {
  return x * x * x;
}

const base = new Base();

export default base;
