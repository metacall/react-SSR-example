import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const fs =require("fs");
const express =require("express");
const PORT = 8080;
const app = express();

app.use("^/$",(req,res,next)=>{
  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("something wrong");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
})

app.use(
  express.static(path.resolve(__dirname, "..", "build"))
);
// app.get("/about",(req,res)=>{
//   res.send("hello from dron");
// })

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
