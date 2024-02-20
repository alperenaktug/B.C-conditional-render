import PropTypes from "prop-types";

function UserGreeting(props) {
  // if (props.isLoggedIn) {
  //   return <h2> Welcome {props.username} </h2>;
  // }
  // return <h2>Please log in to continue</h2>;
  // }

  // return props.isLoggedIn ? (
  //   <h2 className="welcome-message">Welcome {props.username} </h2>
  // ) : (
  //   <h2 className="login-propmt">
  //     Please log in to continue {props.username}{" "}
  //   </h2>
  // );
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username} </h2>
  );
  const loginPropmt = (
    <h2 className="login-propmt">
      Please log in to continue {props.username}{" "}
    </h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPropmt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultTypes = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
