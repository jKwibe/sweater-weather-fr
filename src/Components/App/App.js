import React, {useState} from "react"
import { Route, BrowserRouter as Router } from "react-router-dom";

import MainNavbar from "../Navbar/Navbar";
import MainCanvas from "../MainArea/MainCanvas";
import Footer from "../Footer/Footer";
import Switch from "react-bootstrap/Switch";

import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"

import "./App.scss"

const App = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    console.log(isLoggedIn);
    return(
            <section>

                <Router>
                    <MainNavbar/>
                    <Switch>
                        <Route path="/" exact component={MainCanvas}/>
                        <Route path="/signin" exact render={ props => (
                            <SignIn {...props} isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}/>
                        )}/>
                        <Route path="/signup" exact render={ props => (
                            <SignUp {...props}  isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}/>
                        )}/>
                    </Switch>
                </Router>
                <Footer/>
            </section>
        )
}

export default App;