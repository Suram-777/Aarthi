import "./App.css";
import FooterPart from "./components/FooterPart";
import {  NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <NavbarPart /> */}
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
              <NavLink className="nav-link" to="">Home</NavLink>
              <NavLink className="nav-link" to="contactus">ContactUs</NavLink>
              <NavLink className="nav-link" to="login">Login</NavLink>
              <NavLink className="nav-link" to="signup">SignUp</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
      

      <FooterPart />

    </div>
  );
}

export default App;