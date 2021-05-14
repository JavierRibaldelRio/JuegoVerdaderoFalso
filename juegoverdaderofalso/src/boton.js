var React = require('react');

class Boton extends React.Component {

    constructor(props) {
        super(props)


    }

    render() {

        var textoBoton = "";    //Almacena el texto que contiene el botón

        var idDelBoton = "";    //Alamcena la id que tendra el formate del tipo del botón

        if (this.props.verdadero == true) { //Si este boton es verdadero

            textoBoton = "Verdadero" //Fija el texto a verdadero

        }

        else {          //Si no 
            textoBoton = "Falso"//Fija el texto a falso
        }

        idDelBoton = textoBoton.toLocaleLowerCase(); //Pasa a minuscuals el texto del bto
        return (

            <button className="Boton" id={idDelBoton}>

                {textoBoton}

            </button>

        )

    }

}

export default Boton;