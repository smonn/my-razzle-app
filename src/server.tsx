import express from "express";
import helmet from "helmet";
import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet, HelmetData } from "react-helmet";
import { StaticRouterContext } from "react-router";
import { StaticRouter } from "react-router-dom";
import App from "@components/App";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);

const server = express();

function renderHTML(markup: string, helmetData: HelmetData) {
  return `
<!DOCTYPE html>
<html ${helmetData.htmlAttributes.toString()}>
<head>
  ${helmetData.title.toString()}
  ${helmetData.meta.toString()}
  ${helmetData.link.toString()}
  ${
    assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ""
  }
  ${
    process.env.NODE_ENV === "production"
      ? `<script src="${assets.client.js}" defer></script>`
      : `<script src="${assets.client.js}" defer crossorigin></script>`
  }
</head>
<body ${helmetData.bodyAttributes.toString()}>
  <div id="root">${markup}</div>
</body>
</html>
`;
}

server
  .use(helmet())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get("/*", (req, res) => {
    const context: StaticRouterContext = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      const helmetData = Helmet.renderStatic();
      res.status(200).send(renderHTML(markup, helmetData));
    }
  });

export default server;
