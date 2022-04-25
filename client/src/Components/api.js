
export const searchPokemon = async (pokemon) => {
try {
    let url = "http://localhost:3001/Pokemones"
    const response = await fetch(url);
    const data = await response.json()
    return data;
    } catch(error){}


};