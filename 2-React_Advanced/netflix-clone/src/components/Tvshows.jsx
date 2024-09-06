function Tvshows() {
    return (
        <div className="hero d-flex justify-content-between align-center">
        <div className="tv-shows d-flex justify-content-between">
            <h1 className="text-light me-4 fs-2">TV Shows</h1>
            <div className="btn-group ">
                <button className="btn btn-secondary dropdown-toggle fs-6" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" style={{backgroundColor:"black"}}>
                    Genres
                </button>
                <ul className="dropdown-menu bg-black">
                    <li><a className="dropdown-item bg-dark text-light" href="#!">Fantasy</a></li>
                    <li><a className="dropdown-item bg-dark text-light" href="#!">Sci-Fi</a></li>
                    <li><a className="dropdown-item bg-dark text-light" href="#!">Horror</a></li>
                </ul>
            </div>
        </div>
        <div className="d-none d-lg-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                className="bi bi-list text-light border border-1 border-light p-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                fill="#e8eaed" className="border border-1 border-light p-1">
                <path
                    d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
            </svg>
        </div>
    </div>

    )
}

export default Tvshows;