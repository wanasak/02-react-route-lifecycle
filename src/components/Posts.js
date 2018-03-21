import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];

    const postList = posts.map(item => {
        return (
            <span key={item.id}>
                <Link to={`/posts/${item.id}`}>{item.title}</Link>
            </span>
        );
    });

    // return (
    //     <div>
    //         <Link to="/posts/1">Post 1</Link>
    //         <Link to="/posts/2">Post 2</Link>
    //         <Link to="/posts/3">Post 3</Link>
    //     </div>
    // );

    return <div>{postList}</div>;
};

export default Posts;
