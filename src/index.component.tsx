import React from "react";
import "./index.scss";
import HeaderBar from "./components/layout/headerBar.component";
import ContentContainer from "./components/layout/contentContainer.component";
import SideBar from "./components/layout/sideBar.component";

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
          <SideBar />
          <div className="pt-[48px]">
            <ContentContainer>
              <s_cover_group>
                <s_cover_rep>
                  <s_cover>
                    [##_cover_title_##]
                    <s_cover_url>[##_cover_url_##]</s_cover_url>
                  </s_cover>
                </s_cover_rep>
              </s_cover_group>

              <s_article_rep>
                {/* index item */}

                <s_index_article_rep>
                  <img src="[##_article_rep_thumbnail_url_##]" />
                  [##_article_rep_title_##]asd
                </s_index_article_rep>
              </s_article_rep>
            </ContentContainer>
          </div>
        </s_t3>
      </body>
    </html>
  );
}
