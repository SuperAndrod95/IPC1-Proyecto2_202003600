import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Navbar from '../Components/Navbar';
import Searchbar from '../Components/Searchbar';
import '../CSS/Pokedex.css'
import Cartas from '../Components/cartas';
import axios from 'axios';

const baseUrl = "http://localhost:3001/Pokemon";
const cookies = new Cookies();


class Pokedex extends Component {
    state = {
        Pokemones: []
    }

    componentDidMount() {
        if (!this.state.Pokemones.length > 0) {
            axios.get(baseUrl)
                .then((res) => {
                    this.setState({
                        Pokemones: res.data
                    }
                    )
                }
                )
        }
    }

    render() {
        console.log(cookies.get("usuario"));
        console.log(cookies.get("password"));

        return (
            <div>

                {<Navbar />}
                <div className="navbar-nav">
                    <div className="Closelog">
                        <a className="nav-link px-3" href="/" onClick={this.cerrarSesion}>Cerrar Sesion </a>

                    </div>
                    <div className="layout">

                        <div className="Body">
                            <main className='col-md-9 ms-sm-auto col-lg-9 px-md-4'>
                                {
                                    this.state.Pokemones.map((res, i) => {
                                        if (this.state.Pokemones.length > 0) {
                                            return (<Cartas key={i} info={res} />)
                                        } else {
                                            return null
                                        }
                                    })

                                }


                            </main>
                        </div>

                        <div className="sidebar">
                            <div className='App'>
                                {<Searchbar />}
                            </div>
                            <br></br>
                            <div className='Filtro'>
                                <h3>Filtros</h3>
                                <hr />
                                <div className="w-100">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="tall" />
                                        <label className="form-check-label">
                                            Todos
                                        </label>
                                    </div>
                                    <div className="form-check"  >
                                        <input className="form-check-input" type="radio" />
                                        <label className="form-check-label">
                                            Normal
                                        </label>
                                    </div>
                                    <div className="form-check"  >
                                        <input className="form-check-input" type="radio" />
                                        <label className="form-check-label">
                                            Tierra
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" />
                                        <label className="form-check-label">
                                            Fuego
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Pokedex;