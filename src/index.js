import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

// COMPONENTS
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profiles from "./components/Profiles";
import PostItem from "./components/PostItem";
import LifeCycles from "./components/LifeCycles";
import Conditional from "./components/Conditional";
import Pure from "./components/PureComponen";
import User from "./components/User";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink activeStyle={{ color: 'green'}} exact to="/">Home</NavLink><br />
                    <NavLink activeStyle={{ color: 'green'}} exact to="/posts">Posts</NavLink><br />
                    <NavLink activeStyle={{ color: 'green'}} exact to={{
                        pathname: "/profiles",
                        hash: "#smudger",
                        search: "?name=wanasak"
                    }}>Profiles</NavLink><br />
                    <NavLink activeStyle={{ color: 'green'}} exact to="/lifecycles">Life Cycles</NavLink><br />
                    <NavLink activeStyle={{ color: 'green'}} exact to="/pure">Pure</NavLink><br />
                    <NavLink activeStyle={{ color: 'green'}} exact to="/conditional">Conditional</NavLink><br />
                    <NavLink activeStyle={{ color: 'green'}} exact to="/user">User</NavLink>
                    <hr />
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostItem} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/profiles" component={Profiles} />
                    <Route path="/lifecycles" component={LifeCycles} />
                    <Route path="/pure" component={Pure} />
                    <Route path="/conditional" component={Conditional} />
                    <Route path="/user" component={User} />
                    <Route path="/" exact component={Home} />
                    <Route render={() => <h3>Page Not Found 404</h3>} />
                </Switch>
            </div>  
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
