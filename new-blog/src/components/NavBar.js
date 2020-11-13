import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/addpost">Add Post</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        </Navbar>
      </Router>
    </div>
  );
}

export default NavBar;