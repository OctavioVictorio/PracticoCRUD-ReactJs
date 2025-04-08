import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const datosIniciales = [
    { id: 1, nombre: "Monitor", precio: 250, stock: 10 },
    { id: 2, nombre: "Teclado", precio: 50, stock: 25 },
    { id: 3, nombre: "Mouse", precio: 30, stock: 40 },
  ];

  const [productos, setProductos] = useState(() => {
    const guardados = localStorage.getItem("productos");
    return guardados ? JSON.parse(guardados) : datosIniciales;
  });

  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, { ...nuevoProducto, id: Date.now() }]);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const eliminarTodos = () => {
    setProductos([]);
  };

  const actualizarProducto = (productoActualizado) => {
    setProductos(
      productos.map((p) =>
        p.id === productoActualizado.id ? productoActualizado : p
      )
    );
    setProductoEditando(null);
  };

  return (
    <div className="container">
      <h1>Inventario de Productos</h1>
      <ProductForm
        agregarProducto={agregarProducto}
        productoEditando={productoEditando}
        actualizarProducto={actualizarProducto}
      />
      <ProductList
        productos={productos}
        eliminarProducto={eliminarProducto}
        setProductoEditando={setProductoEditando}
        eliminarTodos={eliminarTodos}
      />
    </div>
  );
};

export default App;
