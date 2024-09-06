import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar"
import Tvshows from "./components/Tvshows"
import TrendingNow from './components/TrendingNow';
import MyFooter from "./components/MyFooter";
import Shows from './components/Shows';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-dark'>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <main className="px-5 mt-5 ">
              <Tvshows />
              <section className="container mt-5 px-0 mx-0  d-flex flex-column align-items-center d-lg-block ms-lg-6  ">
                <TrendingNow term={"Avengers"} />
                <TrendingNow term={"Alien"} />
                <TrendingNow term={"Twilight"} />
              </section>
            </main>
          } />
          <Route path='/shows' element={<Shows />} />
          <Route path='/movie-details/:movieId' element={
            <div className='d-flex justify-content-center'>
              <MovieDetails />
            </div>
          } />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>

  );
}

export default App;
