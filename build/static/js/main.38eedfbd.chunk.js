(this.webpackJsonpjuegoverdaderofalso=this.webpackJsonpjuegoverdaderofalso||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var r=a(5),i=a.n(r),o=a(8),n=a.n(o),s=(a(14),a(9)),c=a(1),d=a(2),u=a(4),l=a(3),h=(a(15),a(0)),f=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){return Object(c.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"afirmacion_div",children:Object(h.jsx)("p",{className:"afirmacion_texto",children:this.props.afirmacion})})}}]),a}(a(5).Component),j=a(6);var b=function(t,e){this.afirmacion=t,this.verdadero=e},m=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){return Object(c.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"usarFuncionAlMarcar",value:function(){this.props.funcionAlMarcar(this.props.verdadero)}},{key:"render",value:function(){var t,e="";return t=(e=!0===this.props.verdadero?"Verdadero":"Falso").toLocaleLowerCase(),Object(h.jsx)("button",{className:"Boton",id:t,onClick:this.usarFuncionAlMarcar.bind(this),disabled:this.props.estadoJuego,children:e})}}]),a}(a(5).Component),v=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){return Object(c.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Panel_Botones",children:[Object(h.jsx)(m,{estadoJuego:this.props.estadoJuego,verdadero:!0,funcionAlMarcar:this.props.alMarcar.bind(this)}),Object(h.jsx)(m,{estadoJuego:this.props.estadoJuego,verdadero:!1,funcionAlMarcar:this.props.alMarcar.bind(this)})]})}}]),a}(a(5).Component),O=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){return Object(c.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("table",{className:"Marcador",children:Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{className:"Texto_Marcador",children:[this.props.texto,":"]}),Object(h.jsx)("td",{className:"Texto_Marcador",children:this.props.valor})]})})})}}]),a}(a(5).Component),p=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){return Object(c.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){if(void 0!=this.props.texto){var t=this.props.texto.trim(),e=this.props.tipo?"Notificacion_correcta":"Notificacion_incorrecta";return Object(h.jsx)("table",{className:"Notificacion "+e,children:Object(h.jsx)("tbody",{children:Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:t})})})})}return Object(h.jsx)("p",{})}}]),a}(a(5).Component),x=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var r;return Object(c.a)(this,a),(r=e.call(this,t)).state={vidas:3,arrayAfirmaciones:void 0,afirmacionesCorrectas:0,contadorDePreguntasFormuladas:0,notficacion:void 0,buenaNotificacion:void 0},r}return Object(d.a)(a,[{key:"marcar",value:function(t){console.log(t);var e,a=this.state.arrayAfirmaciones[0].verdadero===t;!0===a?(this.setState({afirmacionesCorrectas:this.state.afirmacionesCorrectas+1}),e="Correcto"):1!=a&&(this.setState({vidas:this.state.vidas-1}),e="Incorrecto"),this.setState({notificacion:e,buenaNotificacion:a}),setTimeout(function(){this.setState({notificacion:void 0,buenaNotificacion:!0})}.bind(this),3e3);var r=Object(s.a)(this.state.arrayAfirmaciones);r.shift(),this.setState({arrayAfirmaciones:r,contadorDePreguntasFormuladas:this.state.contadorDePreguntasFormuladas+1})}},{key:"render",value:function(){var t=!1;void 0===this.state.arrayAfirmaciones&&(this.state.arrayAfirmaciones=function(t){for(var e=t,a=e.length-1;a>0;a--){var r=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[r],e[r]=i}return e}(function(){for(var t=[],e=0;e<j.length;e++){var a=new b(j[e].Afirmacion,j[e].Verdadero);t.push(a)}return t}()));var e="";return this.state.arrayAfirmaciones.length<=1||0===this.state.vidas?(e="El juego se ha acabado, has acertado "+this.state.afirmacionesCorrectas+" afirmaciones de "+this.state.contadorDePreguntasFormuladas+".",t=!0):this.state.arrayAfirmaciones.length>1&&(e=this.state.arrayAfirmaciones[0].afirmacion),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{afirmacion:e}),Object(h.jsx)(v,{estadoJuego:t,alMarcar:this.marcar.bind(this)}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)(O,{texto:"Vidas",valor:this.state.vidas}),Object(h.jsx)(O,{texto:"Afirmaciones correctas",valor:this.state.afirmacionesCorrectas}),Object(h.jsx)(p,{texto:this.state.notificacion,tipo:this.state.buenaNotificacion})]})}}]),a}(a(5).Component),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,n=e.getTTFB;a(t),r(t),i(t),o(t),n(t)}))};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()},6:function(t){t.exports=JSON.parse('[{"Afirmacion":"La capital de Noruega es Madrid","Verdadero":false},{"Afirmacion":"Los globulos blancos se encargan de las defensas del organismo","Verdadero":true},{"Afirmacion":"La capital de holanda es Amsterdan","Verdadero":true},{"Afirmacion":"MRUA siginifica movimiento rectilineo uniforme  antiguo","Verdadero":false},{"Afirmacion":"Los globulos rojos transportan nutrientes","Verdadero":false}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.38eedfbd.chunk.js.map