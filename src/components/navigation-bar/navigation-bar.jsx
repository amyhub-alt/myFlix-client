import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({user, onLoggedOut})=> {
  // console.log(user)
  const logOut = () => {
      localStorage.clear();
      onLoggedOut();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={`/users/${user.Username}`}>
                  Profile
                </Nav.Link>
                <Nav.Link as="button" onClick={logOut} style={{ border: "none", background: "none", padding: 0, color: "inherit", cursor: "pointer" }}>
                  Log Out
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


  




