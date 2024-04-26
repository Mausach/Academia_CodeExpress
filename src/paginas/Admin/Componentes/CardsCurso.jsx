import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CardsCurso = ({curso,navigate}) => {

  const handleVerDetalle = () => {
    try {
      console.log(curso.programaDeEstudioPDF.data)
        // Verificar si existen datos del PDF
        if (!curso.programaDeEstudioPDF || !curso.programaDeEstudioPDF.data) {
            throw new Error('No hay datos de PDF disponibles');
        }
        // Crear una URL para el PDF del curso
        const pdfUrl = URL.createObjectURL(new Blob([curso.programaDeEstudioPDF.data], { type: curso.programaDeEstudioPDF.contentType }));
        // Abrir una nueva ventana del navegador con el PDF
        window.open(pdfUrl, '_blank');
    } catch (error) {
        console.error('Error al abrir el PDF:', error.message);
        // Aquí puedes agregar manejo de errores adicional, como mostrar un mensaje al usuario
    }
};
  return (
    <div >
      <div>

<Card className=' p-5 p-sm-4 borde-card rounded  m-3' style={{ width: '20rem' }}>
    
    <Card.Body>
        <Card.Title>{curso.Nombre}</Card.Title>
        <hr></hr>
        <Card.Text>
            {curso.Categoria}
        </Card.Text>
        

        <Button variant="danger" className="mb-3" onClick={handleVerDetalle} >
            <h6>
                
                ver mas detalle
            </h6>
        </Button>
    </Card.Body>
</Card>

</div>
      
      </div>
  )
}
