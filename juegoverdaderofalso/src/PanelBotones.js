import Boton from "./boton";


var React = require("react");


class PanelBotones extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {


        return (
            <div className="Panel_Botones">

                <Boton estadoJuego={this.props.estadoJuego} verdadero={true} funcionAlMarcar={this.props.alMarcar.bind(this)}></Boton>
                <Boton estadoJuego={this.props.estadoJuego} verdadero={false} funcionAlMarcar={this.props.alMarcar.bind(this)}></Boton>

            </div >
        )

    }

}

export default PanelBotones