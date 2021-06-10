import './App.css';

import Afirmacion from './frase.js';
import jsonAfirmaciones from './afirmaciones.json';
import AfirmacionObjeto from './ClassePreguntas';
import PanelBotones from './PanelBotones';
import Marcador from './Marcador';
import NotificacicionUsuario from './Notificacion';

var React = require('react');

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      vidas: 3, //Almacena las vidas restantes

      arrayAfirmaciones: undefined, //Almacena todas las afirmaciones coreectas

      afirmacionesCorrectas: 0, //Almacena el numero de afiramciones correctas

      contadorDePreguntasFormuladas: 0,

      notficacion: undefined,   //Almacena a la notificación que va a mandar

      buenaNotificacion: undefined


    }
  }


  //Se ocupa de comprobar si se a marcado la respuesta correcta y en funcion de si se a marcado la respuesta correcta suma afirmaciones correctas o resta vidas
  marcar(verdadero) {

    console.log(verdadero);


    var correcto = this.state.arrayAfirmaciones[0].verdadero === verdadero;

    var notificacionAMostrar;

    //Si es correcto suma uno al maracador de afirmaxiones corectas y si es falso resta una vida

    if (correcto === true) {

      this.setState({ afirmacionesCorrectas: this.state.afirmacionesCorrectas + 1 });

      notificacionAMostrar = "Correcto";


    } else if (correcto != true) {

      this.setState({ vidas: this.state.vidas - 1 });

      notificacionAMostrar = "Incorrecto";

    }

    this.setState({ notificacion: notificacionAMostrar, buenaNotificacion: correcto });


    //Pone un ocntador hacía atras
    setTimeout(function () {

      //Revierte el estado poniendolo en configuración original
      this.setState({ notificacion: undefined, buenaNotificacion: true });

    }.bind(this), 3 * 1000);    //El numero es el tiempo en milisegundos, por eso multiplico por mil



    //Elimina la primera casilla sel Array
    let arrayAfirmacionesPrimeroEliminado = [...this.state.arrayAfirmaciones];
    arrayAfirmacionesPrimeroEliminado.shift();
    this.setState({ arrayAfirmaciones: arrayAfirmacionesPrimeroEliminado, contadorDePreguntasFormuladas: this.state.contadorDePreguntasFormuladas + 1 });


  }

  render() {

    //Almacena si ele jeugo esta en marcha

    var juegoParado = false;

    //Hace combierte el json a un array de clases
    function hacerArrayAfirmaciones() {

      var arr = [];

      for (var i = 0; i < jsonAfirmaciones.length; i++) {

        var verdadero = false;

        //Combierte en binario a boolean
        if (jsonAfirmaciones[i].Verdadero === 1) {
          verdadero = true;
        }

        let nuevoObjeto = new AfirmacionObjeto(jsonAfirmaciones[i].Afirmacion, verdadero);

        arr.push(nuevoObjeto);
      }

      return arr
    }

    //Mezcla el array
    function shuffle(arr) {

      var array = arr;

      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    //Si el array afirmaciones esa indefinido lo crea
    if (this.state.arrayAfirmaciones === undefined) {
      this.state.arrayAfirmaciones = shuffle(hacerArrayAfirmaciones());

    }

    //Almacena lo que se mostrara como afirmacion


    var afirmacionAMostrar = "";

    //Se ocupa de decidir cual es la próxima afirmación
    if (this.state.arrayAfirmaciones.length <= 1 || this.state.vidas === 0) {

      afirmacionAMostrar = "El juego se ha acabado, has acertado " + this.state.afirmacionesCorrectas + " afirmaciones de " + this.state.contadorDePreguntasFormuladas + ".";

      juegoParado = true;

    } else if (this.state.arrayAfirmaciones.length > 1) {

      afirmacionAMostrar = this.state.arrayAfirmaciones[0].afirmacion;
    }


    return (
      <div className="App" >


        <div className="Arriba">

          <br />
          <br />
          <br />
          <br />


          <Afirmacion afirmacion={afirmacionAMostrar} />


          <PanelBotones estadoJuego={juegoParado} alMarcar={this.marcar.bind(this)}/*Le pasa al panel de botones la funcón que se a de usar al marcar un botón*/ />

          <br />
        </div>

        <div className="Abajo">
          <hr />

          <Marcador texto="Vidas" valor={this.state.vidas} />

          <Marcador texto="Afirmaciones correctas" valor={this.state.afirmacionesCorrectas} />

          <NotificacicionUsuario texto={this.state.notificacion} tipo={this.state.buenaNotificacion} />
        </div>
      </div>);
  }
}

export default App;
