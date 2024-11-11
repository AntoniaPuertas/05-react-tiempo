
import { useWeather } from "../hooks/useWeather"
import { WeatherForm } from "./WeatherForm"
import { WeatherInfo } from "./WeatherInfo"


export const TiempoApp = () => {

    const {dataClima, ciudad, setCiudad, fetchClima} = useWeather()

  return (
    <>
        <div className="container">
            <h1>El Tiempo</h1>
            <WeatherForm 
                ciudad={ciudad}
                cambioCiudad={setCiudad}
                manejoSubmit={fetchClima}
            />
            <WeatherInfo 
                dataClima={dataClima}
            />
        </div>
    </>
  )
}
