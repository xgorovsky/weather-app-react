import React from 'react'
//import icon1 from './seasons.png';

const Weather = (props) => {

    //Below getting exact day from Date JS 
    //let day = date.getDate();
    
    function minutes_with_leading_zeros(a) 
    { 
      return (a.getMinutes() < 10 ? '0' : '') + a.getMinutes();
    }
    const spanStyle = {color:"#486860"};
return (
    <div className="weather-info-wrapper">
        {props.city && props.country && <p><span style={spanStyle}>Location:</span> <strong>{props.city}</strong>, {props.country}</p>}
        {props.temperature && <p><span style={spanStyle}>Temperature:</span> <strong>{Math.round(props.temperature - 273)}</strong>°C</p>}
        {props.humidity && <p><span style={spanStyle}>Humidity:</span> <strong>{props.humidity}</strong>%</p>}
        {props.pressure && <p><span style={spanStyle}>Pressure:</span> <strong>{props.pressure}</strong> hPa</p>}
        {props.sunrise && <p>
            <span style={spanStyle}>Sunrise:</span> 
            <strong>{new Date ((props.sunrise * 1000)).getHours()}:{minutes_with_leading_zeros(new Date (props.sunrise * 1000))}</strong> CET</p>}
        {props.sunset && <p>
            <span style={spanStyle}>Sunset:</span> 
            <strong>{new Date ((props.sunset * 1000)).getHours()}:{minutes_with_leading_zeros(new Date (props.sunset * 1000))}</strong> CET</p>}
        {props.description && <p><span style={spanStyle}>Description:</span> <strong>{props.description}</strong> </p>}
        {props.error && <p style={{color:"red"}}><strong>{props.error}</strong></p>}
        {/*{props.description && <img className="weather-image-wrapper"src={icon1} alt="logo" />}*/}
    </div>
)
}



export default Weather;
