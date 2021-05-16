var React = require('react'); //necesario para usa react

//Este componente muestra la frase que aparece en el centro
class Afirmacion extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {



        return (

            <div className="afirmacion_div">

                <p className="afirmacion_texto">{this.props.afirmacion}</p>

            </div>

        )
    }
}

export default Afirmacion; //Prepara para la exportación de la afirmacion