import React from 'react';
import './Today.scss';

const Today = (props) => {
    const capitilize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    return (
        <div className="today">
            <h1 className='ti'>{props.city}</h1>
            <h3 className='ti'>{new Date().toDateString()}</h3>
            <div className='toBox'>
                <div className="icon">
                    <img src={` http://openweathermap.org/img/wn/${props.Tweather.weather[0].icon}@2x.png`} alt="state" height="200px" width="200px" />
                </div>
                <div className="Tweather">
                    <p>Waether : <span>{capitilize(props.Tweather.weather[0].description)}</span></p>
                    <p>Temperature : <span>{Math.round(props.Tweather.main.temp)} C°</span></p>
                    <p>Humidity : {props.Tweather.main.humidity} %</p>
                    <p>Wind : <span>{props.Tweather.wind.speed} m/s</span></p>
                    <p>Pressure : {props.Tweather.main.pressure} mBar</p>
                </div>
            </div>
        </div>
    )
}

export default Today