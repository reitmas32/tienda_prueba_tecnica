import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import UpdateDialog from '../UpdateDialog';
import CreateDialog from '../CreateDialog';


const ListProducts = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");

    const fetchProducts = async () => {
        console.log(`Holas ${process.env.API_URL}`)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/productos/`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/productos/${productId}/`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const [showUpdateDialog, setShowUpdateDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);


    const openUpdateDialog = (product) => {
        setProduct(product);
        setShowUpdateDialog(true);
    };

    const openCreateDialog = () => {
        setShowCreateDialog(true);
    };

    const closeFloatingDialog = () => {
        setShowUpdateDialog(false);
        setShowCreateDialog(false);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container fluid>UpdateDialog
            <Row>
                <Col>
                    <h2>Listado de Productos</h2>
                    <ListGroup>
                        {products.map(product => (
                            <ListGroupItem
                                key={product.id}
                                className="d-flex justify-content-between align-items-center w-100"
                                style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}
                            >
                                <div className="w-100">
                                    {product.cantidad}  | <strong>{product.nombre}</strong>: {product.descripcion} - ${product.precio}
                                </div>
                                <div>
                                    <Button
                                        color="danger"
                                        className="rounded-pill"
                                        style={{
                                            margin: '10px',
                                            padding: '10px 20px',
                                            color: 'white',
                                            backgroundColor: '#4632a8',
                                            border: 'none',
                                            borderRadius: '5px',
                                        }}
                                        onClick={() => openUpdateDialog(product)}
                                    >
                                        Actualizar
                                    </Button>

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
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    {showUpdateDialog && <UpdateDialog onClose={closeFloatingDialog} product={product} />}
                    {showCreateDialog && <CreateDialog onClose={closeFloatingDialog} />}

                </Col>
                <Button
                    color="danger"
                    className="rounded-pill"
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        color: 'white',
                        backgroundColor: '#4632a8',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                    onClick={() => openCreateDialog()}
                >
                    Agregar
                </Button>
            </Row>
        </Container>

    );
};

export default ListProducts;
