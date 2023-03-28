import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import SideBar from "./components/sidebar/SideBar";

const ChannelListContainer = () => {
  const x = useChatContext();
  return (
    <div>
      <ChannelList>
        <SideBar />
      </ChannelList>
    </div>
  );
};
export default ChannelListContainer;
