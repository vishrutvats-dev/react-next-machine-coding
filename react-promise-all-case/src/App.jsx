import { useEffect, useState } from 'react'
import './App.css'

const url = "https://swapi.dev/api/people/"
function App() {
  const[swData,setSwData] = useState([])

  useEffect(()=> {
    async function getData() {
      try{
        const data = await fetch(url)
        const finalData = await data.json()
  
        // console.log(finalData?.results)
        const charactersData = finalData?.results;

        // Fetch films and vehicles for each character
        const enrichedCharacters = await Promise.all(
          charactersData.map(async (character) => {
            const films = await Promise.all(
              character.films.map((filmUrl) =>
                fetch(filmUrl)
                  .then((res) => res.json())
                  .then((filmData) => filmData.title)
              )
            );

            const vehicles = await Promise.all(
              character.vehicles.map((vehicleUrl) =>
                fetch(vehicleUrl)
                  .then((res) => res.json())
                  .then((vehicleData) => vehicleData.name)
              )
            );

            return {
              name: character.name,
              films,
              vehicles,
            };
          })
        );

        setSwData(enrichedCharacters);



      } catch(error){
        console.log("Error at swData", error)
      }

    }

    getData()
  },[])

  useEffect(()=> {
    console.log(swData)
  },[swData])

  return (
    <div id='container' className='container'>
      Hello
    </div>
  )
}

export default App
