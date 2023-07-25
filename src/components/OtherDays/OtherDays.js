import React, { useEffect, useState } from 'react';
import './OtherDays.scss';

const OtherDays = (props) => {
    const [nbr, setNbr] = useState([0, 0, 0, 0]);
    const dayForecast = (i) => {
        const d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const x = new Date().getDay() + i;
        return d[x % 7];
    }
    useEffect(() => {
        let x = new Date().getHours();
        let index = 0;
        let start = 0;
        if (x > 13) start = 0;
        else {
            start = Math.round((13 - x) / 3 + 1);
        }
        for (let i = start; i < 40; i++) {
            let h = new Date(props.OthWeather.list[i].dt_txt).getHours();
            if (h >= 11 && h <= 13 && index < 4) {
                nbr[index] = i;
                setNbr(nbr);
                index++;
            }
        }

    }, [])


    return (
        <div className="othDays">
            <div className="dayT">
                <div className="icon">
                    <img src={` http://openweathermap.org/img/wn/${props.OthWeather.list[nbr[0]].weather[0].icon}@2x.png`} alt="state" height="50px" width="50px" />
                </div>
                <p>{dayForecast(1)}</p>
                <p>{Math.round(props.OthWeather.list[nbr[0]].main.temp)} C°</p>
            </div>
            <div className="dayT">
                <div className="icon">
                    <img src={` http://openweathermap.org/img/wn/${props.OthWeather.list[nbr[1]].weather[0].icon}@2x.png`} alt="state" height="50px" width="50px" />
                </div>
                <p>{dayForecast(2)}</p>
                <p>{Math.round(props.OthWeather.list[nbr[1]].main.temp)} C°</p>
            </div>
            <div className="dayT">
                <div className="icon">
                    <img src={` http://openweathermap.org/img/wn/${props.OthWeather.list[nbr[2]].weather[0].icon}@2x.png`} alt="state" height="50px" width="50px" />
                </div>
                <p>{dayForecast(3)}</p>
                <p>{Math.round(props.OthWeather.list[nbr[2]].main.temp)} C°</p>
            </div>
            <div className="day">
                <div className="icon">
                    <img src={` http://openweathermap.org/img/wn/${props.OthWeather.list[nbr[3]].weather[0].icon}@2x.png`} alt="state" height="50px" width="50px" />
                </div>
                <p>{dayForecast(4)}</p>
                <p>{Math.round(props.OthWeather.list[nbr[3]].main.temp)} C°</p>
            </div>
        </div>
    )
}

export default OtherDays