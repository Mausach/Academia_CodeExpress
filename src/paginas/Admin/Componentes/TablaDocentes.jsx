import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { ModalEditarUsuario } from './ModalEditarUsuario';
import { AlertaInhabilitar } from '../Helpers/inhabilitarUsuario';
import { Alertahabilitar } from '../Helpers/HabilitarUsuario';

export const TablaDocentes = ({cargarProfesores, navigate, setNuevoUsuarioCargado}) => {
    //para modal de registro
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [UsuarioEditar, setUsuarioEditar] = useState({});

  //abre el modal para editar los datos del usuario
  const editarUsuarioClick = (Docent) => {
    setUsuarioEditar(Docent);
    handleShowModal()
  };

  return (
    <div>
        <Container>
        <Table striped bordered hover variant="dark" responsive="sm" className="text-white justify-content-center align-items-center p-5 p-sm-4 border border-white">

          <thead>
            <tr>
              <th colSpan={7}>
                <h3 className='text-center text-color-slogans'>Docentes</h3>
              </th>
            </tr>
            <tr>

              
              <th>Nombres</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Inactivar</th>
            </tr>
          </thead>

          {cargarProfesores.map((Docent) => {
            return (
              <tbody key={Docent._id}>
                <tr>

                  <td className='d-none d-md-table-cell'>{Docent.nombres}</td>
                  <td>{Docent.apellido}</td>
                  <td>{Docent.email}</td>
                  <td>{Docent.telefono}</td>
                  <td>{Docent.estado}</td>
                  <td>
                    <button className='btn text-color-slogans'
                      onClick={() => editarUsuarioClick(Docent)}>
                      <strong className='font-weight-bold'>
                        <h3>
                          {/*Editar*/}
                          <i className='bi bi-pencil-square'></i>
                        </h3>
                      </strong>

                    </button>
                  </td>
                  <td>
                    {Docent.estado === 'Activo' && (

                      <button className='btn text-color-slogans2 '
                         onClick={() => AlertaInhabilitar(Docent._id, Docent.nombres, Docent.email,navigate,setNuevoUsuarioCargado)}>
                        <strong className='font-weight-bold'>
                          <h3>
                            {/*Inhabilitar*/}
                            <i className='bi bi-person-fill-slash'> </i>
                          </h3>
                        </strong>
                      </button>

                    )}
                    {Docent.estado === 'Inactivo' && (

                      <button className='btn text-color-slogans3 '
											onClick={() => Alertahabilitar(Docent._id, Docent.nombres,Docent.email,navigate,setNuevoUsuarioCargado)} 
											>
                        <strong className='font-weight-bold'>
                          <h3>
                            {/*habilitar*/}
                            <i className='bi bi-person-fill-check'> </i>
                          </h3>
                        </strong>
                      </button>

                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </Container>

<ModalEditarUsuario showModal={showModal} handleCloseModal={handleCloseModal} UsuarioEditar={UsuarioEditar} setUsuarioEditar={setUsuarioEditar} setNuevoUsuarioCargado={setNuevoUsuarioCargado} />

    </div>
  )
}
