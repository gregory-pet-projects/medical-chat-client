import React from "react";
import { useChatContext } from "stream-chat-react";
import { ChannelPreview, DirectPreview } from "../index";
import clsx from "clsx";

const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  const previewMembers = () =>
    Object.values(channel?.state?.members).filter(
      ({ user }) => user.id !== client.userID
    );

  return (
    <div
      className={clsx(
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      )}
      onClick={() => {
        console.log(channel);
      }}
    >
      {type === "team" ? (
        <ChannelPreview name={channel?.data?.name} id={channel?.data?.id} />
      ) : (
        <DirectPreview members={previewMembers()} />
      )}
    </div>
  );
};

export default TeamChannelPreview;
