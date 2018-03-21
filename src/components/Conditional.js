import React from "react";

const Conditional = () => {
    const value = false;

    const showIt = () => {
        return value ? <div>True</div> : <div>False</div>;
    };

    return <div>{showIt()}</div>;
};

export default Conditional;
