import React, {Component} from "react";
import axios from "axios"

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";

import "./MainCanvas.css"


class MainCanvas extends Component{
        state = {
            forecast: null,
            coordinates: {
                lat: null,
                lon: null,
            }

        }
    async componentDidMount() {
        let lat, lon;
        navigator.geolocation.watchPosition((position)=> {
            lat = position.coords.latitude
            lon = position.coords.longitude
            this.setState({
                coordinates: {
                    lat,
                    lon
                }
            })
        })
        await this.fetchData()
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
        const { forecast, coordinates } = this.state;
        console.log(coordinates)

        return(
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
}

export default MainCanvas;