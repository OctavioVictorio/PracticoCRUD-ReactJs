import React, { useState, useEffect } from "react";

const ProductForm = ({
  agregarProducto,
  productoEditando,
  actualizarProducto,
}) => {
  const [form, setForm] = useState({ nombre: "", precio: "", stock: "" });

  useEffect(() => {
    if (productoEditando) {
      setForm(productoEditando);
    }
  }, [productoEditando]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre && form.precio && form.stock) {
      if (productoEditando) {
        actualizarProducto(form);
      } else {
        agregarProducto({
          ...form,
          precio: Number(form.precio),
          stock: Number(form.stock),
        });
      }
      setForm({ nombre: "", precio: "", stock: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={form.precio}
        onChange={handleChange}
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
      />
      <button type="submit">
        {productoEditando ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default ProductForm;
