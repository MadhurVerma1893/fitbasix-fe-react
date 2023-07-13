import React from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

function FacebookChat() {
  return (
    <div>
      <div>
        <div id="fb-root"></div>
        <FacebookProvider appId="1139142833407342" chatSupport>
          <CustomChat pageId="110214088548240" attribution="biz_inbox" />
        </FacebookProvider>
      </div>
    </div>
  );
}

export default FacebookChat;
