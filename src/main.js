import "./assets/css/base.css";
import center from "./center";

setTimeout(() => {
  import("./footer").then((footer) => {
    console.log("footer", footer);
    document.body.appendChild(footer.default);
  });
  import("./header").then(({ header }) => {
    console.log("header", header);
    document.body.appendChild(header);
  });
}, 3000);
document.body.appendChild(center);
