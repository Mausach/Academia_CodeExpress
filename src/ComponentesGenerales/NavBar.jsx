import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logos/LOGO2.png'
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { AltasModal } from '../paginas/Admin/Componentes/AltasModal';

export const NavBar = ({usuario,setNuevoUsuarioCargado, cambiarOpcion}) => {

  const navigate = useNavigate();

  //para modal de registro
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const ir_Login = () => {
    emailUs = null;
    navigate('/login', { state: emailUs })
  }

  const ir_Comiciones = () => {
    cambiarOpcion('Comiciones');
    // Resto del código
  };

  const ir_Cursos = () => {
    cambiarOpcion('Cursos');
    // Resto del código
  };

  const ir_Carreras = () => {
    cambiarOpcion('Carreras');
    // Resto del código
  };

  const ir_Admin = () => {
    cambiarOpcion('Admin');
    // Resto del código
  };
  
  const ir_Docentes = () => {
    cambiarOpcion('Profesor');
    // Resto del código
  };

  const ir_LogOut = () => {
    localStorage.removeItem('token');
    usuario = null;
    navigate('/login')
  }
  

  const renderNavbarPorRol = () => {
    switch (usuario.rol) {
      case 'Fundador': //navbar de administrador
      console.log('me dibuja fundador')
      return (
          <Navbar expand="lg" className="text-light rounded-bottom" id="navbar">
          <Container fluid>
            <Navbar.Brand className='text-light d-flex mx-4' /*onClick={ir_Home}*/>
              <img className="logo" style={{ width: '100px' }} src={Logo} alt="Logo" />{' '}
  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
            <Navbar.Collapse id="navbarScroll" >
  
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='text-light'>
                  <Button className="m-2" variant="outline-light" onClick={handleShowModal} >
                    Registrar
                  </Button>
  
                </Nav.Link>

                <Nav.Link className='text-light'>
                  <Button className="m-2" variant="outline-light" onClick={ir_Comiciones} >
                    Comiciones
                  </Button>
  
                </Nav.Link>

                <Nav.Link className='text-light'>
                  <Button className="m-2" variant="outline-light" onClick={ir_Cursos} >
                    Cursos
                  </Button>
  
                </Nav.Link>

                <Nav.Link className='text-light'>
                  <Button className="m-2" variant="outline-light" onClick={ir_Carreras} >
                    Carreras
                  </Button>
  
                </Nav.Link>
                
                <Nav.Link className='text-light'>
                  <Button className="m-2" variant="outline-light" onClick={ir_Docentes}>
                    Docentes
                  </Button>
                </Nav.Link>
  
                <Nav.Link className='text-light'>
                  <Button className="m-2" variant="outline-light" onClick={ir_Admin}>
                    Admins
                  </Button>
                </Nav.Link>
                
  
              </Nav>
              
  
              <Nav.Link>
                <Dropdown className="m-2">

                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    {usuario.nombres}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <NavDropdown.Item /*onClick={ir_Nosotros}*/>Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Item onClick={ir_LogOut}>Cerrar Sesion</NavDropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
              </Nav.Link>

            </Navbar.Collapse>
            
          </Container>
          
        </Navbar>
        
  
      );

      case 'Admin': //navbar de administrador
        return (
            <Navbar expand="lg" className="bg-secondary rounded-bottom" id="navbar">
            <Container fluid>
              <Navbar.Brand className='text-light d-flex mx-4' /*onClick={ir_Home}*/>
                <img className="logo" style={{ width: '100px' }} src={Logo} alt="Logo" />{' '}
    
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
              <Navbar.Collapse id="navbarScroll" >
    
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" onClick={handleShowModal}>
                      Registrar
                    </Button>
    
                  </Nav.Link>
                  
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" /*onClick={ir_tienda}*/>
                      Docentes
                    </Button>
                  </Nav.Link>
    
                  
    
                </Nav>
    
                <Nav.Link>
                <Dropdown className="m-2">

                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  {console.log(usuario.nombres)}
                    {usuario.nombres}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <NavDropdown.Item /*onClick={ir_Nosotros}*/>Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Item onClick={ir_LogOut}>Cerrar Sesion</NavDropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
              </Nav.Link>

              </Navbar.Collapse>
            </Container>
          </Navbar>
    
        );
      case 'Profesor':
        return (
          <Navbar expand="lg" className="bg-secondary rounded-bottom" id="navbar">
            <Container fluid>
              <Navbar.Brand className='text-light d-flex mx-4' /*onClick={ir_Home}*/>
                <img className="logo" style={{ width: '100px' }} src={Logo} alt="Logo" />{' '}
    
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
              <Navbar.Collapse id="navbarScroll" >
    
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
    
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" /*onClick={ir_tienda}*/>
                      Filtrar
                    </Button>
                  </Nav.Link>
    
                </Nav>

                <Nav.Link>
                <Dropdown className="m-2">

                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    {usuario.nombres}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <NavDropdown.Item /*onClick={ir_Nosotros}*/>Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Item onClick={ir_LogOut}>Cerrar Sesion</NavDropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
              </Nav.Link>
    
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      case 'alumno':
        return (
          <Navbar expand="lg" className="bg-secondary rounded-bottom" id="navbar">
            <Container fluid>
              <Navbar.Brand className='text-light d-flex mx-4' /*onClick={ir_Home}*/>
                <img className="logo" style={{ width: '100px' }} src={Logo} alt="Logo" />{' '}
    
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
              <Navbar.Collapse id="navbarScroll" >
    
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" /*onClick={ir_Home}*/>
                      Registrar
                    </Button>
    
                  </Nav.Link>
    
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" /*onClick={ir_tienda}*/>
                      Docentes
                    </Button>
                  </Nav.Link>
    
                </Nav>
    
                <Nav.Link>
                <Dropdown className="m-2">

                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    {usuario.nombres}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <NavDropdown.Item /*onClick={ir_Nosotros}*/>Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Item onClick={ir_LogOut}>Cerrar Sesion</NavDropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
              </Nav.Link>

              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        );
      default:
        console.log('me dibuja default')
        // Puedes mostrar un navbar predeterminado o manejarlo según tus necesidades
        return (
          <Navbar expand="lg" className="bg-secondary rounded-bottom" id="navbar">
            <Container fluid>
              <Navbar.Brand className='text-light d-flex mx-4' /*onClick={ir_Home}*/>
                <img className="logo" style={{ width: '100px' }} src={Logo} alt="Logo" />{' '}
    
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
              <Navbar.Collapse id="navbarScroll" >
    
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" onClick={handleShowModal} /*onClick={ir_Home}*/>
                      Registrar
                    </Button>
    
                  </Nav.Link>
    
                  <Nav.Link className='text-light'>
                    <Button className="m-2" variant="outline-light" /*onClick={ir_tienda}*/>
                      Docentes
                    </Button>
                  </Nav.Link>
    
                </Nav>

                
    
                <Form className="d-flex">
                  <div className='me-5'>
    
                      <Button className="m-2" variant="outline-light" /*onClick={ir_LogOut}*/>
                        <i className="bi bi-box-arrow-left"> </i>
                        Salir
                      </Button>
                   
                  </div>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
  };

  return (
    <div >


   {renderNavbarPorRol()}
   <AltasModal showModal={showModal} setNuevoUsuarioCargado={setNuevoUsuarioCargado} handleCloseModal={handleCloseModal} rolus={usuario.rol}/>

    </div>
  )
}