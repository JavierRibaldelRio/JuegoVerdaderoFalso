import logo from './logo.svg';
import './App.css';

import Afirmacion from './frase.js';
import Boton from './boton';

var React = require('react');

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      vidas: 3, //Almacena las vidas restantes

      arrayAfirmaciones: undefined
    }
  }


  render() {

    // function hacerArrayAfirmaciones(json) {

    //   for (var i = 0; i )

    // }

    return (
      <div className="App" >

        <Afirmacion afirmacion="Los paises subdesenvolupadis son desnvolupados porque su población " />

        <Boton verdadero={true}></Boton> <Boton verdadero={false}></Boton>

      </div>);
  }
}

export default App;
