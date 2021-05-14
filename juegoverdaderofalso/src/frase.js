var React = require('react'); //necesario para usa react

class Afirmacion extends React.Component {

    constructor(props) {

        super(props);

        this.state = { afirmacion: this.props.afirmacion.trim() } //Cog e la afirmación y le elimina los espacios tanto a principio de palabra como al final
    }

    render() {


        return (

            <div className="afirmacion_div">

                <p className="afirmacion_texto">{this.state.afirmacion}</p>

            </div>

        )
    }
}

export default Afirmacion; //Prepara para la exportación de la afirmacion