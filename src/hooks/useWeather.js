import { useState } from "react"
import { WEATHER_CONFIG } from "../config/constants"

export const useWeather = () => {
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)


    const fetchClima = async () => {
        try{
            const response = await fetch(`${WEATHER_CONFIG.urlBase}?q=${ciudad}&appid=${WEATHER_CONFIG.API_KEY}&lang=es`)
            const data = await response.json()
            setDataClima(data)
            console.log(data)
        }catch(error){
            console.error("Tenemos un problema ", error)
        }
    }

    return {
        dataClima,
        ciudad,
        setCiudad,
        fetchClima
    }
}