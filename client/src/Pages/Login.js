import React, { Component } from 'react';
import Pokelog from '../images/Pokemonlogin.png';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3001/Users";
const cookies = new Cookies();

class login extends Component {
    state = {
        form: {
            usuario: '',
            password: '',
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        });

    }

    enviarFormularo = e => {
        e.preventDefault()
    }

    iniciarSesion = async () => {
        if(this.state.form.usuario.length>0 && this.state.form.password.length>0){
            await axios.get(baseUrl)
            .then(response => {
                var usuario = ""
                var password = ""
                response.data.map(maps => {
                    if (maps.usuario === this.state.form.usuario && maps.password === this.state.form.password) {
                        usuario = maps.usuario
                        password = maps.password
                    } else {
                        return null
                    }
                }
                )
                if (usuario === this.state.form.usuario && password === this.state.form.password) {
                    console.log("Ha iniciado sesión");
                    cookies.set("usuario");
                    cookies.set("password");
                    alert("Bienvenido")
                    window.location.href="./Pokedx"
                }
                else {
                    alert("El usuario y/o la contraseña son incorrectos")
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }


    render() {
        return (
            <div className='container py-5'>
                <div className='row'>
                    <div className='col py-5' >
                        <h1>Pokedex</h1>
                        <h2>Login into your account:</h2>
                        <form onSubmit={this.enviarFormularo} className='py-lg-5'>
                            <div className="mb-3">
                                <label className="form-label">User:</label>
                                <input type="text"
                                    className="form-control"
                                    name='usuario'
                                    onChange={this.handleChange}
                                    id="user" 
                                    required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name='password'
                                    onChange={this.handleChange}
                                    id="password" 
                                    required/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={() => this.iniciarSesion()}>Login</button>
                        </form>
                    </div>
                    <div className='col'>
                        <img src={Pokelog} alt='img' className='img-fluid' />
                    </div>
                </div>
            </div>
        )
    }
}
export default login;