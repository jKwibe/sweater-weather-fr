import React, {Component} from "react";
import axios from "axios"

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";

import "./MainCanvas.css"


class MainCanvas extends Component{
        state = {
            forecast: null
        }
    async componentDidMount() {
        this.fetchData().then()
    }

    async fetchData() {
        let res = await
            axios.get("https://sweater-weather-api-rails.herokuapp.com/api/v1/forecast",
                {
                    params:{
                        location: 'denver,co'
                    }
                }
            );

        this.setState({
            forecast: res.data
        })
    }

    render() {
        const { forecast } = this.state;
        return(
            <main className="main-section">
                <section className="top-city-info row">
                    <article className="left-city-info col-6">
                        <CityInfo info={forecast}/>
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