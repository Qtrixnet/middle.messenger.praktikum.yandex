import {registerComponent, renderDOM} from "../../core";
import {Chats} from "./chats";
import Toolbar from "../../components/toolbar";
import ChatCard from "../../components/chat-card";
import {Message} from "../../components/message/message";

registerComponent(Toolbar);
registerComponent(ChatCard);
registerComponent(Message);

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new Chats());
});
