import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'reactstrap';



const CreateDialog = ({ onClose, }) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');



    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidad(event.target.value);
    };

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    const handleSubmit = async () => {

        const updatedProduct = {};
        if (nombre !== "") updatedProduct.nombre = nombre;
        if (cantidad !== "") updatedProduct.cantidad = cantidad;
        if (precio !== "") updatedProduct.precio = precio;
        if (descripcion !== "") updatedProduct.descripcion = descripcion;

        try {
            const url = `http://127.0.0.1:8000/productos/`;
            const headers = {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'X-CSRFToken': 'bBmEOzPqzcBlq0pdd125zEw4E9CNUzr3seOvAF6tIj9bh5nYiziF1yfYsVmLxYsy'
            };

            const response = await axios.post(url, updatedProduct, { headers });

            if (response.status === 201) {
                console.log('Producto actualizado correctamente');
                onClose();
            } else {
                console.error('Error al actualizar el producto:', response.status);
            }
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <div className="floating-dialog">
            <div className="dialog-content">
                <h2>Agregar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre:</label>
                        <Input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={handleNombreChange}
                            style={{ padding: '2px', margin: '10px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cantidad">Cantidad:</label>
                        <Input
                            type="number"
                            className="form-control"
                            id="cantidad"
                            value={cantidad}
                            onChange={handleCantidadChange}
                            style={{ padding: '2px', margin: '10px' }}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="precio">Precio:</label>
                        <Input
                            type="number"
                            className="form-control"
                            id="precio"
                            value={precio}
                            onChange={handlePrecioChange}
                            style={{ padding: '2px', margin: '10px' }}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea
                            className="form-control"
                            id="descripcion"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                        />
                    </div>
                    <Button
                        color="danger"
                        className="rounded-pill"
                        style={{
                            margin: '10px',
                            padding: '10px 20px',
                            color: 'white',
                            backgroundColor: 'green',
                            border: 'none',
                            borderRadius: '5px',
                        }}
                        onClick={() => handleSubmit()}
                    >
                        Confirmar
                    </Button>
                </form>
                <Button
                    color="danger"
                    className="rounded-pill"
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        color: 'white',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                    onClick={() => onClose()}
                >
                    Cancelar
                </Button>
            </div>
        </div>
    );
};

export default CreateDialog;
