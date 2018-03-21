import React, { Component } from "react";

class LifeCycles extends Component {
    // 1. get defaults props

    // 2. set default state
    state = {
        title: "Life Cycles"
    };

    // 3. before render
    componentWillMount() {
        console.log("componentWillMount");
        // document.querySelector("h3").style.color = "red"; // Error
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.title); // Previous state
        console.log(nextState.title);

        if (nextState.title === this.state.title) return false;

        return true;
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    _changeTitle = () => {
        this.setState({ title: "Hello World!!!" });
    };

    // 4. render jsx
    render() {
        console.log(this.props);
        console.log("rener");

        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={this._changeTitle}>Change Title</div>
            </div>
        );
    }

    // 5. after render jsx
    componentDidMount() {
        console.log("componentDidMount");
        document.querySelector("h3").style.color = "red";
    }
}

export default LifeCycles;
