import React from "react";
import { searchPokemon } from "./api";
const { useState } = React;

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    const onClick = async (e) => {
        console.log('Apretando Boton');
        const data = await searchPokemon(search);
        setPokemon(data);
    };
    return (
        <div className="searchbar-container">
            <div className="searchbard">
                <input placeholder="Buscar Pokemon..." onChange={onChange} />
            </div>
            <div className="searchbar-btn">
                <button  onClick={onClick}>Buscar</button>
            </div>
            <div> </div>
            </div>
       

    )
};
export default Searchbar;