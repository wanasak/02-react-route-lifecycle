import React from "react";
import { Link } from "react-router-dom";

const PostItem = props => {
    return (
        <div>
            PostItem {props.match.params.id}
            <Link to="/posts">Back</Link>
        </div>
    );
};

export default PostItem;
