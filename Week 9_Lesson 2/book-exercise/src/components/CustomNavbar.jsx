
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#home">My Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#browser">Browser</Nav.Link>
                            <NavDropdown title="Genre" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Horror
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Scifi</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Fantasy</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;