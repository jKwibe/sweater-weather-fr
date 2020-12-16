import React, {Component, Fragment} from "react";

import CityInfo from "../CityInfo/CityInfo";
import TopWeather from "../TopWeather/TopWeather";
import WeaklyForecast from "../WeaklyForecast/WeaklyForecast";

import weatherForecast from "../../API/ForecastApi";

import "./MainCanvas.css"


class MainCanvas extends Component{
        state = {
            forecast: null,
            isLoaded: false,
            location: "denver,co"
        }

        onLocationChange = (location)=> {
            console.log(`You have reached the top ${location}`)
            this.setState({
                location: location
            })
        }

    async componentDidMount() {
        let res = await weatherForecast(this.state.location)
        console.log(res, this.state.location)
        this.setState({
            forecast: res.data,
            isLoaded: true
        })
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.location !== prevState.location){
            let res = await weatherForecast(this.state.location)
            this.setState({
                forecast: res.data
            })
        }
    }

    // eslint-disable-next-line react/require-render-return
    render() {

        const { forecast, isLoaded } = this.state;

        if(isLoaded) {
            return (
                <main className="main-section">
                    <section className="top-city-info row">
                        <article className="left-city-info col-6">
                            <CityInfo onChangeLoc={this.onLocationChange} info={forecast}/>
                        </article>

                        <article className="right-city-info col-6">
                            <TopWeather  info={forecast}/>
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