const Notification = (props) => {
  //  Write your code here.
  const { name, className, url } = props;
  return (
    <div className={className}>
      <img className="logo" src={url} />
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="bluebg"
      name="Information Message"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="greenbg"
      name="Success Message"
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="yellowbg"
      name="Warning Message"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="redbg"
      name="Error Message"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
