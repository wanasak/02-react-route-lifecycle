import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
    state = { title: "First Title" };

    // No required
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.title === this.state.title) return false;

    //     return true;
    // }

    _changeTitle = () => {
        this.setState({ title: "Second Title" });
    };

    render() {
        console.log("RENDER");
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={this._changeTitle}>Change Title</div>
            </div>
        );
    }
}
