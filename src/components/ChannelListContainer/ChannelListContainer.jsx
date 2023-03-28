import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import CompanyHeader from "./components/companyHeader/CompanyHeader";
import SideBar from "./components/sidebar/SideBar";

const ChannelListContainer = () => {
  const x = useChatContext();
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
      </div>
    </>
  );
};
export default ChannelListContainer;
