

export const WeatherForm = ({ciudad, manejoSubmit, cambioCiudad}) => {

    const handleForm = (e) => {
        e.preventDefault()
        console.log(ciudad)
        if(ciudad.trim().length > 0) manejoSubmit()
    }

    const changeCiudad = (e) => {
        cambioCiudad(e.target.value)
    }
    
  return (
    <>
            <form onSubmit={handleForm}>
                <input 
                    type="text"
                    placeholder="Ciudad"
                    value={ciudad}
                    onChange={changeCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
    </>
  )
}
