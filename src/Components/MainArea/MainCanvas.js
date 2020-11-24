import React, {Component} from "react";

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";

import "./MainCanvas.css"


class MainCanvas extends Component{

    render() {
        return(
            <main className="main-section">
                <section className="top-city-info row">
                    <article className="left-city-info col-6">
                        <CityInfo/>
                    </article>

                    <article className="right-city-info col-6">
                        <TopWeather/>
                    </article>
                </section>

                <section className="row">
                    <section className="col-12">
                        <WeaklyForecast/>
                    </section>
                </section>
            </main>
        )
    }
}

export default MainCanvas;