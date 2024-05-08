import React from "react";
import "./index.scss";
import HeaderBar from "./components/layout/headerBar.component";
import ContentContainer from "./components/layout/contentContainer.component";

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scale=1.0, user-scalable=no"
        />
        <title>[##_page_title_##] :: [##_title_##]</title>
      </head>
      <body>
        <s_t3>
          <HeaderBar />
          <div className="pt-[48px]">
            <ContentContainer>contensts!!</ContentContainer>
          </div>
        </s_t3>
      </body>
    </html>
  );
}
