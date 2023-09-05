
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WeaderCard from './componet/WeaderCard'

function App(){

  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()

  useEffect(() => {
    const succes = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
   }
   navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if(coords){
      const APIkey = "9004303e34171dec7270dd9b543a369c"
      const url= `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`
      axios.get(url)
        .then(res => setweather(res.data))
        .catch(err => console.log(err))
    }
  }, [coords])
  

  console.log(weather)

  return (
    <>
       <div className='mi-div'>
        <h1> ¿COMO ESTA EL CLIMA? </h1>
        <WeaderCard weather={weather}/>
       </div>
    </>
  );
};

export default App
