import React, { useEffect, useState } from 'react'

export default function useCharacter() {
    const url= "https://rickandmortyapi.com/api/character"
    const [characters, setCharacters]=useState([]);

    //async await

    const getCharacters = async () => {
        const response = await fetch(url)
        //await guardar
        const data = await response.json()
        setCharacters(data.results)
        console.log(data);
    }

useEffect(() => 
{
    getCharacters()
}, []);

return{characters}
}