import React from "react";

const ProductList = ({
  productos,
  eliminarProducto,
  setProductoEditando,
  eliminarTodos,
}) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>{producto.stock}</td>
                <td>
                  <button onClick={() => setProductoEditando(producto)}>
                    Editar
                  </button>
                  <button onClick={() => eliminarProducto(producto.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {productos.length > 0 && (
        <button onClick={eliminarTodos} style={{ marginTop: "1rem" }}>
          Eliminar Todos
        </button>
      )}
    </div>
  );
};

export default ProductList;
