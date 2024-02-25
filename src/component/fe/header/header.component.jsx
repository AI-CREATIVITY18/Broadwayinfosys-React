import { Container, Nav, Form, Navbar, NavDropdown, Button, Row, Col, Carousel, Image } from "react-bootstrap"


const Feheader = () => {
    return(<>
         <Navbar expand={"lg"} className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">
                        Dipesh
                    </Navbar.Brand>
                    <Navbar.Toggle
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                    </Navbar.Toggle>
                    <Navbar.Collapse id="menu">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Nav.Item>
                                <Nav.Link className="active" href="/" >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="inactive" href="About-Us" >About-Us</Nav.Link>
                            </Nav.Item>


                            <NavDropdown title="Brand" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Brand/Apple">Apple</NavDropdown.Item>
                                <NavDropdown.Item href="/Brand/Samsung">Samsung</NavDropdown.Item>
                                <NavDropdown.Item href="/Brand/Nokia">Nokia</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Category/Clothing">Clothing</NavDropdown.Item>
                                <NavDropdown.Item href="/Category/Men">Men</NavDropdown.Item>
                                <NavDropdown.Item href="/Category/Women">Women</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Form className="d-flex" role="search">
                            <Form.Control
                                className="me-2"
                                type="search"
                                placeholder="Search"
                            />
                            <Button variant="outline-success"  type="submit">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/Register">Register </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">Login </Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>)
}

export default Feheader