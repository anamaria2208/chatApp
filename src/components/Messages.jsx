

const Messages = ({ messages, currentMember }) => {
    const renderMessage = (message) => {
      const { member, text } = message;
      const messageFromMe = member.id === currentMember.id;
      const className = messageFromMe
        ? "Messages-message currentMember"
        : "Messages-message";
      return (
        <li className={className}>
          <span
            className="avatar"
            style={{ backgroundColor: member.clientData.color }}
          />
          <div className="Message-content">
            <div className="username">{member.clientData.username}</div>
            <div className="text">{text}</div>
          </div>
        </li>
      );
    };
  
    return (
      <ul className="Messages-list">
        {messages.map((m, index) => (
          <div key={index}>{renderMessage(m)}</div>
        ))}
      </ul>
    );
  };
  
  export default Messages;