import React from "react";
import { Avatar } from "stream-chat-react";

const DirectPreview = ({ members }) => {
  const user = members && members[0] && members[0].user;
  return (
    <div className="channel-preview__item single">
      <Avatar image={user?.image} name={user?.fullname} size={24} />
      <p>{user?.fullname}</p>
    </div>
  );
};
export default DirectPreview;
