import { observer } from "mobx-react";
import React, { useState } from "react";

import { ChatStore } from "./chatStore";

export const Chat = observer(({ chatStore }: { chatStore: ChatStore }) => {
  const [messages] = useState(chatStore.messages);
  return (
    <div>
      {messages.map((it, i) => (
        <p
          key={i}
          style={it.read ? {} : { fontWeight: "bold" }}
          onClick={() => chatStore.readMessage(it.id)}
        >
          {it.value}
        </p>
      ))}
    </div>
  );
});
