import React, { Component } from "react"

import MainNavbar from "./Navbar/Navbar";
import MainCanvas from "./MainArea/MainCanvas";

class SweaterWeather extends Component {
    render() {
        return(
            <section className="container">
                <MainNavbar/>
                <MainCanvas/>
            </section>
        )
    }
}

export default SweaterWeather;