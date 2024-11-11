import { useState } from "react"


export const TiempoApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const urlIcons = 'https://openweathermap.org/img/wn/'
    const API_KEY = import.meta.env.VITE_API_KEY
    const diffKelvin = 273.15

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)


    const cambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const manejoSubmit = (e) => {
        e.preventDefault()
        if(ciudad.trim().length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try{
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}&lang=es`)
            const data = await response.json()
            setDataClima(data)
            console.log(data)
        }catch(error){
            console.error("Tenemos un problema ", error)
        }
    }

  return (
    <>
        <div className="container">
            <h1>El Tiempo</h1>
            <form onSubmit={manejoSubmit}>
                <input 
                    type="text"
                    placeholder="Ciudad"
                    value={ciudad}
                    onChange={cambioCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {(dataClima.main.temp - diffKelvin).toFixed()}ºC</p>
                        <p className="capitaliza">Condiciones: {dataClima.weather[0].description}</p>
                        <img src={`${urlIcons}${dataClima.weather[0].icon}@2x.png`} />
                    </div>
                    

                )
            }
        </div>
    </>
  )
}
