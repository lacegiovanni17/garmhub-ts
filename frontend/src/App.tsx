import { useContext, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";

function App() {
  const { state: { mode }, dispatch, } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])
  
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Garm-Hub</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign-In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">
          Copyright © Garm-Hub. All rights reserved. Made with ❤️ in Lagos🇳🇬.
        </div>
      </footer>
    </div>
  );
}

export default App;
