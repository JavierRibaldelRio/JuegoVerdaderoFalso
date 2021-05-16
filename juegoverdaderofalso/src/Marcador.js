//Este script almacena el componente del marcador

var React = require('react');

class Marcador extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {


        return (
            <table className="Marcador">

                <tbody>

                    <tr>

                        <td className="Texto_Marcador">{this.props.texto}:</td>

                        <td className="Texto_Marcador">{this.props.valor}</td>

                    </tr>

                </tbody>

            </table>
        )
    }

}

export default Marcador;