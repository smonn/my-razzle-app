import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { SEOProps } from "./types";

const SEO: FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
