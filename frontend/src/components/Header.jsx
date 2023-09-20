import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // object for path to brand mappings
  const pathToBrandMap = {
    "/dashboard": "Dashboard",
    "/students": "Students",
    "/account": "Accountant",
    "/payment": "Payment",
    "/feeStructure": "Fee Structure ",
    "/statements": "Statements",
    "/notification": "Notification",
    "/logout": "Logout",
  };

  //    now extract the dynamic value from the pathToBrandMap

  const dynamicPath = pathToBrandMap[location.pathname];

  const [showDropdown, setShowDropdown] = useState(false); // Provide an initial value

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">{dynamicPath}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav style={{ marginLeft: "80%" }}>
              <NavDropdown
                title={<BsIcons.BsBell />}
                style={{ marginRight: "20%" }}
              >
                <NavDropdown.Item>Notification 1</NavDropdown.Item>
                <NavDropdown.Item>Notification 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                show={showDropdown}
                onToggle={toggleDropdown}
                title={<BsIcons.BsFillPersonFill />}
                id="dropdown-menu"
              >
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
