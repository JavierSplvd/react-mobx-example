import { observer } from "mobx-react";
import React from "react";
import { chatStore } from "./chatStore";

export const Title = observer(() => {
  console.log("Title", chatStore);
  return (
    <div>
      You have {chatStore.messages.filter((it) => !it.read).length} unread
      messages.
    </div>
  );
});
