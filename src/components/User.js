import React from "react";
import UserHoc from "../hoc/UserHOC";

const User = props => {
    console.log(props);
    return <div>User 1</div>;
};

export default UserHoc(User, "Hello");
