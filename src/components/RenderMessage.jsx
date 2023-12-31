import { useState } from "react";

const RenderMessage = ({ message, currentMember }) => {
  const [member, setMember] = useState(message.member);
  const [text, setText] = useState(message.text);
  const messageFromMe = member.id == currentMember.id;
  const className = messageFromMe ?
    "Messages-message currentMember" : "Messages-message";
  return (
    <li className={className}>
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
      <div className="Message-content">
        <div className="username">{member.clientData.username}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
};

export default RenderMessage;
