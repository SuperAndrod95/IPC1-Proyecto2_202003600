import React, { Component } from "react";


class Cartas extends Component {


    render() {

        return (
            <div class="card" >
                <img src={this.props.info.Imagen} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{this.props.info.Nombre}</h5>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{this.props.info.Numero}</small>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{this.props.info.Tipo}</small>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{this.props.info.Ataque}</small>
                </div>
            </div>

        )
    }
}
export default Cartas;
