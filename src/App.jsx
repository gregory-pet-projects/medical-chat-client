import React from "react";
import { Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import { ChannelContainer, ChannelListContainer, Auth } from "./components";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const client = StreamChat.getInstance(API_KEY);

const authToken = false;

const App = () => {
  console.log("client", client);
  if (!authToken) {
    return <Auth />;
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
