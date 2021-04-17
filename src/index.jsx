import React from 'react'
import ReactDOM from 'react-dom'
import Boton from './components/Button'
import './home.css'
import imagen from './assets/static/prueba1.png'
import imagen2 from './assets/static/otra.png'

const styles = {
  structure: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: '100px',
    textAlign: 'center',
    lineHeight: '100%',
    color: '#1F1F1F',
    fontFamily: 'Cormorant Garamond, serif',
  },
  su: {
    position: 'absolute',
    fontSize: '100px',
    color: '#1F1F1F',
    fontFamily: 'Cormorant Garamond, serif',
  },
  nosotros: {
    position: 'absolute',
    fontSize: '100px',
    top: '400px',
    color: '#1F1F1F',
    fontFamily: 'Cormorant Garamond, serif',
  },
  ojos: {
    position: 'absolute',
    fontSize: '100px',
    top: '500px',
    color: '#1F1F1F',
    left: '50px',
    fontFamily: 'Cormorant Garamond, serif',
  },
  text2: {
    position: 'absolute',
    top: '1070px',
    left: '90px',
    fontSize: '60px',
    color: '#1F1F1F',
    fontFamily: 'Cormorant Garamond, serif',
  },
  lista: {
    position: 'absolute',
    top: '1370px',
    textAlign: 'center',
    left: '400px',
    fontSize: '70px',
    color: '#1F1F1F',
    fontFamily: 'Cormorant Garamond, serif',
  },
  cursiva: {
    position: 'relative',
    fontSize: '98px',
    left: '80px',
    fontStyle: 'italic',
    color: '#1F1F1F',
    fontFamily: 'Cormorant Garamond, serif',
  },
  efect: {
    width: '240px',
    height: '580px',
    position: 'absolute',
    opacity: '0.5',
    top: '35px',
    left: '580px',
    backgroundColor: 'rgb(249, 245, 239, 1)',
  },
  efect2: {
    width: '590px',
    height: '590px',
    opacity: '0.1',
    position: 'relative',
    top: '1900px',
    right: '-500px',
    backgroundColor: 'rgb(249, 245, 239, 1)',
  },
  textParrafo: {
    position: 'relative',
    fontSize: '15px',
    top: '75px',
    opacity: '0.8',
    lineHeight: '100%',
    color: '#1F1F1F',
    fontFamily: 'Arial',
  },
  textParrafo2: {
    position: 'relative',
    fontSize: '15px',
    top: '130px',
    left: '130px',
    opacity: '0.8',
    color: '#1F1F1F',
    fontFamily: 'Arial',
  },
  textParrafo3: {
    position: 'relative',
    fontSize: '15px',
    top: '3070px',
    left: '10px',
    opacity: '0.8',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#1F1F1F',
    fontFamily: 'Arial',
  },
  textParrafo4: {
    position: 'relative',
    fontSize: '15px',
    textTransform: 'uppercase',
    color: '#c19a5b',
    fontFamily: 'Arial',
  },
  scroll: {
    position: 'relative',
    fontSize: '12px',
    top: '270px',
    color: '#c19a5b',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  akitania: {
    position: 'relative',
    fontSize: '20px',
    top: '-250px',
    left: '-610px',
    letterSpacing: '20px',
    fontFamily: 'Arial',
    color: '#c19a5b',
    transform: 'rotate(270deg)',
  },
  akitania2: {
    position: 'relative',
    fontSize: '20px',
    top: '-40px',
    left: '605px',
    letterSpacing: '20px',
    fontFamily: 'Arial',
    color: '#c19a5b',
    transform: 'rotate(90deg)',
  },
}

const App = () => (
  <div className="back">
    <Boton />
    <div id="circle" />
    <div style={styles.structure}>
      <img src={imagen} style={styles.efect} alt="" />
      <div style={styles.text}>
        TÚ DELEITA
        <div style={styles.su}>
          SU
        </div>
        <div style={styles.cursiva}>
          PALADAR
        </div>
        <div style={styles.textParrafo}>
          Creamos experiencias digitales únicas y memorables a negocios de
          <br />
          <br />
          gastronomía creativa como restaurantes, reposterías, bodegas o
          <br />
          <br />
          tiendas gourmet
        </div>
        <div style={styles.nosotros}>
          NOSOTROS,
        </div>
        <div style={styles.ojos}>
          SUS OJOS.
        </div>
        <div style={styles.scroll}>
          SCROLL DOWN
        </div>
        <div style={styles.akitania}>
          AKITANIA
        </div>
        <div style={styles.akitania2}>
          AKITANIA
        </div>
      </div>
      <div style={styles.text2}>
        HACEMOS DE TU IMAGEN
        <br />
        EL MEJOR antipasti.
        <br />
        HACEMOS QUE A LA
        <br />
        GENTE SE LE HAGA LA
        <br />
        BOCA AGUA.
        <br />
        <br />
        <br />
        TÚ, HAZ EL RESTO.
        <div style={styles.textParrafo2}>
          Si tu local, ambiente y oferta gastronómica respiran calidad, exquisitez y obsesion
          <br />
          <br />
          por los detalles,¿por qué obviar tu identidad digital?
          <br />
          <br />
          <br />
          Te creamos una reputación digital única que acercará la excelencia y emociones de
          <br />
          <br />
          la alta cocina a tus potenciales clientes, a través de un viaje experiencial en tu sitio
          <br />
          <br />
          web. Impulsará tu reputacion, reservaras en tu local o ventas online.
        </div>
        <div style={styles.lista}>
          PROYECTOS
          <br />
          SERVICIOS
          <br />
          AKITANIA
          <br />
          CONTACTO
        </div>
      </div>
      <div style={styles.textParrafo3}>
        akitania 2021| estudio creativo digital
        <br />
        creamos experiencias digitales únicas y memorables a negocios de gastronomía
        <br />
        Creativa como restaurantes, reposterías, bodegas o tiendas gourmet.
        <div style={styles.textParrafo4}>
          aviso legal polítca de cookies polítca de privacidad
        </div>
      </div>
    </div>
    <img src={imagen2} style={styles.efect2} alt="" />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
