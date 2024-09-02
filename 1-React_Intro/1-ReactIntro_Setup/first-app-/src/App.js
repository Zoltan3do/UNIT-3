import logo from './logo.svg'
import './App.css'
import NewComponent from './components/NewComponent'
import AnotherComponent from './components/AnotherComponent'
import ClassComponent from './components/ClassComponent'

// un componente React può semplicemente essere una funzione che ritorna
// una sintassi simile all'HTML -> questa sintassi si chiama JSX
// differenze tra HTML e JSX:
// - tutti gli attributi "class" diventano "className"
// - le variabili si iniettano nella sintassi più facilmente, con { }

const myName = 'Stefano'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PRIMO COMPONENTE REACT!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* PROPS */}
        <div className="d-flex">
          <NewComponent name="Stefano" cssClass="text-red" />
          <NewComponent name="Aldo" cssClass="text-green" />
          <NewComponent name="Sara" cssClass="text-purple" />
        </div>
        <AnotherComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload. {myName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          EPICODE!
        </a>
        <ClassComponent counter={100} />
        <ClassComponent counter={30} />
        {/* i valori delle prop che NON sono stringhe necessitano delle graffe! */}
      </header>
    </div>
  )
}

export default App
