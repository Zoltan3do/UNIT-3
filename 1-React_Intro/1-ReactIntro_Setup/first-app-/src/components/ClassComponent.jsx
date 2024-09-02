import { Component } from 'react'

class ClassComponent extends Component {
  // le prop nei componenti a classe si trovano in this.props
  render() {
    return (
      <>
        <h3>Class Component!</h3>
        <h3>Altra riga - {this.props.counter}</h3>
        {/* this.props è ANALOGO del parametro "props" dei componenti a funzione */}
        {/* sarà SEMPRE un oggetto contentente tutte le prop che avete
        passato a questo componente a classe */}
      </>
    )
  }
  // il metodo render() è OBBLIGATORIO
  // senza di esso il componente a classe NON FUNZIONA!
}

export default ClassComponent
