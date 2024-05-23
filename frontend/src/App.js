import React from 'react';
import ListProducts from './components/products/List';

const App = () => {
  return (
    <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
      <h1>Lista de Productos</h1>
      <ListProducts />
    </div>
  );
};


export default App;
