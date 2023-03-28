import React from "react";

const ChannelPreview = ({ name, id }) => (
  <p className="channel-preview__item"># {name || id}</p>
);
export default ChannelPreview;
