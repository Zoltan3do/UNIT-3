import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <AllTheBooks/>
        <Welcome/>

      </main>
      <MyFooter/>
    </>
  );
}

export default App;
