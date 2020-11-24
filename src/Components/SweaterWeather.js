import React, { Component } from "react"

import MainNavbar from "./Navbar/Navbar";
import MainCanvas from "./MainArea/MainCanvas";
import Footer from "./Footer/Footer";

class SweaterWeather extends Component {
    render() {
        return(
            <section className="container">
                <MainNavbar/>
                <MainCanvas/>
                <Footer/>
            </section>
        )
    }
}

export default SweaterWeather;