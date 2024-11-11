import { WEATHER_CONFIG } from "../config/constants"

export const WeatherInfo = ({dataClima}) => {

  return (
    <>          
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {(dataClima.main.temp - WEATHER_CONFIG.diffKelvin).toFixed()}ºC</p>
                        <p className="capitaliza">Condiciones: {dataClima.weather[0].description}</p>
                        <img src={`${WEATHER_CONFIG.urlIcons}${dataClima.weather[0].icon}@2x.png`} />
                    </div>
                    
                )
            
    </>
  )
}
