import { observer } from "mobx-react";
import React from "react";
import { ChatStore } from "./chatStore";

export const GetMoreButton = observer(
  ({ chatStore }: { chatStore?: ChatStore }) => {
    return (
      <div>
        <button onClick={() => chatStore.addMessage()}>Get messages</button>
      </div>
    );
  }
);
