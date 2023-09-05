import React, { useState } from 'react'

const WeaderCard = ({weather}) => {
  const [respuesta, setRespuesta] = useState();

  const cambiarRespuesta = () => {
    setRespuesta({tenperfarenger, celciosredon});
  };
    console.log(weather)
    const celciosredon = Math.round(weather?.main.temp - 273.15)
    const tenperfarenger = (9/5 * celciosredon) + 32
  return (
    <div>
       <h2>{weather?.name}, {weather?.sys.country}</h2>
       <div>
        <div className='image02'>
          <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
        </div>
        <section>
          <h3>{weather?.weather[0].description}</h3>
          <ul>
            <li><span>Wind Speed:  </span><span>{weather?.wind.speed}</span> m/s</li>
            <li><span>Clouds:  </span><span>{weather?.clouds.all}</span> % </li>
            <li><span>Pressure:  </span><span>{weather?.main.pressure}</span> hPa</li>
          </ul>
        </section>
       </div>
       <h2>{respuesta ? `${celciosredon} ºC`: `${tenperfarenger} ºF`}</h2>
       <button onClick={cambiarRespuesta}>combertir en ºC</button>
    </div>
  )
}

export default WeaderCard
