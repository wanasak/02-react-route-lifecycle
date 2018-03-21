import React from "react";
import Card from "../hoc/Card";
import Auth from "../hoc/Auth";

const Profiles = props => {
    console.log(props);
    console.log(props.match.url);

    return (
        <Auth>
            <Card>
                <div>Profiles</div>
            </Card>
        </Auth>
    );
};

export default Profiles;
