import React from "react";
import "./App.css";
import { Chat } from "./features/chat/Chat";
import { ChatStore } from "./features/chat/chatStore";
import { GetMoreButton } from "./features/chat/GetMoreButton";
import { Title } from "./features/chat/Title";

function App(props: { chatStore: ChatStore }) {
  console.log("App", props);
  return (
    <div className="App">
      <Title />
      <GetMoreButton chatStore={props.chatStore} />
      <Chat chatStore={props.chatStore} />
    </div>
  );
}

export default App;
