import { action, makeAutoObservable } from "mobx";

export interface Message {
  id: string;
  value: string;
  read: boolean;
}

export class ChatStore {
  messages: Message[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  addMessage() {
    this.messages.push({
      id: Math.random() * 10000 + "",
      read: false,
      value: "Foo",
    });
    console.log("addMessage", this.messages);
  }

  @action
  readMessage(id: string) {
    const found = this.messages.find((it) => it.id === id);
    if (found) found.read = true;
  }
}

export const chatStore = new ChatStore();
