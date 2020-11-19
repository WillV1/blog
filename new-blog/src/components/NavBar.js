import { BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar(props) {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Blog</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/addpost">Add Post</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/blog">Main</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
        </Navbar>
      </Router>
    </div>
  );
}

export default NavBar;