import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import './App.css';
function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <BookList />
        <Welcome />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
