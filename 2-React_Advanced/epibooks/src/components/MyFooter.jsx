function MyFooter() {
    return (
        <footer className="bg-dark text-white text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Chi Siamo</h5>
                        <p>
                            Siamo un'azienda dedicata a fornire libri di alta qualità. La nostra missione è soddisfare i nostri clienti con la pura conoscenza.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Prodotti</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-white">Prodotto 1</a></li>
                            <li><a href="#!" className="text-white">Prodotto 2</a></li>
                            <li><a href="#!" className="text-white">Prodotto 3</a></li>
                            <li><a href="#!" className="text-white">Prodotto 4</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links Utili</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-white text-decoration-none">Link 1</a></li>
                            <li><a href="#!" className="text-white">Link 2</a></li>
                            <li><a href="#!" className="text-white">Link 3</a></li>
                            <li><a href="#!" className="text-white">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contattaci</h5>
                        <p>Indirizzo: Via Esempio 123, 00100 Roma, Italia</p>
                        <p>Telefono: +39 012 345 6789</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright: <a className="text-white" href="#!">epibooks.com</a>
            </div>
        </footer>
    )
}

export default MyFooter;