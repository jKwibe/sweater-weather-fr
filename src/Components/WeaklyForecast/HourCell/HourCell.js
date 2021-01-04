
import "./HourCell.scss"

const HourCell = ({ data }) => {
    const {time, icon, temp} = data
    return(
        <section className="hourly-weather">
            <div>
                { time }<br/>
                <img src={ icon } alt="weather icon"/>
                { Math.floor(temp) }  &#8457;
            </div>
        </section>
    )
}

export default HourCell;