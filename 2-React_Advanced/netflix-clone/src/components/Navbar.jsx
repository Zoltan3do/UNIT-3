import netflix_logo from "../netflix_logo.png";
import avatar from "../avatar.png";
import { Navbar, Nav, Container, NavDropdown, Button, Image } from "react-bootstrap";
import { BsSearch, BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";


function CustomNavbar() {
    return (
        <Navbar bg="black" variant="dark" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image src={netflix_logo} alt="logo" width="150px" className="me-3" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#!" className="text-light">Home</Nav.Link>
                        <Link to="/shows" className="nav-link text-light">TV Shows</Link>
                        {/* <Nav.Link href="#!" className="text-light">TV Shows</Nav.Link> */}
                        <Nav.Link href="#!" className="text-light">Movies</Nav.Link>
                        <Nav.Link href="#!" className="text-light">Recently Added</Nav.Link>
                        <Nav.Link href="#!" className="text-light">My List</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center justify-content-end">
                        <Button variant="link" className="text-light px-2">
                            <BsSearch size={16} />
                        </Button>
                        <div className="text-light px-2">
                            <p className="m-0">KIDS</p>
                        </div>
                        <Button variant="link" className="text-light px-2">
                            <BsBellFill size={16} />
                        </Button>
                        <NavDropdown align="end" title={<Image src={avatar} alt="avatar" width="40px" roundedCircle />} id="nav-dropdown">
                            <NavDropdown.Item href="#!" className="bg-dark text-light">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#!" className="bg-dark text-light">Settings</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CustomNavbar;
