import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

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
