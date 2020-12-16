import React, {Component, Fragment} from "react";
import axios from "axios"

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";

import "./MainCanvas.css"


class MainCanvas extends Component{
        state = {
            forecast: null,
            isLoaded: false
        }
    loc(location = "denver,co"){
        return location
    }

    // TODO: Add the api call logic to the api call directory
    async componentDidMount() {

        let res = await
            axios.get("https://sweater-weather-api-rails.herokuapp.com/api/v1/forecast",
                {
                    params:{
                        location: this.loc()
                    }
                }
            );

        this.setState({
            forecast: res.data,
            isLoaded: true
        })
    }

    // eslint-disable-next-line react/require-render-return
    render() {

        const { forecast, isLoaded } = this.state;

        if(isLoaded) {
            return (
                <main className="main-section">
                    <section className="top-city-info row">
                        <article className="left-city-info col-6">
                            <CityInfo info={forecast}/>
                        </article>

                        <article className="right-city-info col-6">
                            <TopWeather info={forecast}/>
                        </article>
                    </section>
                    <section className="row">
                        <section className="col-12">
                            <WeaklyForecast info={forecast}/>
                        </section>
                    </section>
                </main>
            )
        }

        return (
            <Fragment>
                <section>
                    <p>Loading...</p>
                </section>
            </Fragment>
        )
    }
}

export default MainCanvas;