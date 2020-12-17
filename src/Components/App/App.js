import React, { Component } from "react"
import { Route, BrowserRouter as Router } from "react-router-dom";

import MainNavbar from "../Navbar/Navbar";
import MainCanvas from "../MainArea/MainCanvas";
import Footer from "../Footer/Footer";
import Switch from "react-bootstrap/Switch";

import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"

import "./App.scss"

class App extends Component {
    render() {
        return(
            <section>
                <MainNavbar/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={MainCanvas}/>
                        <Route path="/signin" exact component={SignIn}/>
                        <Route path="/signup" exact component={SignUp}/>
                    </Switch>
                </Router>
                <Footer/>
            </section>
        )
    }
}

export default App;