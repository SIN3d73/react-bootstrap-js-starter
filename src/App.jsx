import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import logo from './logo.svg'
import One from './views/One';
import Two from './views/Two';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/" >
            <Navbar.Brand>
              <Image src={logo} width={40} height={40}/>
              PiotroPol
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/" >
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/one" >
              <Nav.Link >One</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/two" >
              <Nav.Link>Two</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<h1>hello</h1>}/>
          <Route path="/one" element={<One/>}/>
          <Route path="/two" element={<Two/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
