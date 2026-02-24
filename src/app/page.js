"use client";
import { useState } from "react";

export default function Home() {
  const productos = [
    { nombre: "Leche", precio: 150, lugar: "Córdoba, Argentina", descuento: 10 },
    { nombre: "Pan", precio: 80, lugar: "Buenos Aires, Argentina", descuento: 5 },
    { nombre: "Huevos", precio: 200, lugar: "Mendoza, Argentina", descuento: 15 },
    { nombre: "Arroz", precio: 250, lugar: "Santa Fe, Argentina", descuento: 20 },
    { nombre: "Azúcar", precio: 120, lugar: "Tucumán, Argentina", descuento: 12 },
    { nombre: "Aceite", precio: 400, lugar: "Rosario, Argentina", descuento: 18 },
    { nombre: "Queso", precio: 350, lugar: "Córdoba, Argentina", descuento: 10 },
    { nombre: "Yerba", precio: 600, lugar: "Misiones, Argentina", descuento: 8 },
    { nombre: "Fideos", precio: 180, lugar: "Buenos Aires, Argentina", descuento: 15 }
  ];

  const [mensaje, setMensaje] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);

  // Filtrado de productos
  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito, prod]);
    setMensaje(`🛒 Agregaste ${prod.nombre} al carrito`);
  };

  const comprar = (prod) => {
    const precioFinal = prod.precio - (prod.precio * prod.descuento / 100);
    setMensaje(`✅ Compraste ${prod.nombre} por $${precioFinal.toFixed(2)} con ${prod.descuento}% de descuento`);
    setCarrito(carrito.filter(p => p !== prod)); // se elimina del carrito después de comprar
  };

  const vender = (prod) => setMensaje(`📦 Publicaste ${prod.nombre} para vender`);
  const intercambiar = (prod) => setMensaje(`🔄 Solicitud de intercambio enviada para ${prod.nombre}`);

  const totalCarrito = carrito.reduce((acc, item) => acc + (item.precio * (1 - item.descuento / 100)), 0);

  return (
    <main style={{ backgroundColor: "#F0F2F5", minHeight: "100vh", display: "flex", justifyContent: "center", padding: "30px" }}>
      <div style={{ maxWidth: "650px", width: "100%", backgroundColor: "#fff", borderRadius: "15px", padding: "30px", boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#1F618D", textAlign: "center", marginBottom: "10px" }}>💸 Ahorrago</h1>
        <p style={{ textAlign: "center", fontSize: "16px", color: "#333", marginBottom: "20px" }}>
          Compará precios, aplica descuentos y comprá en toda Argentina
        </p>

        {mensaje && (
          <div style={{ backgroundColor: "#DFF2BF", color: "#4F8A10", padding: "10px", borderRadius: "10px", marginBottom: "20px", textAlign: "center", fontWeight: "bold" }}>
            {mensaje}
          </div>
        )}

        {/* Buscador */}
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ padding: "12px", flex: 1, borderRadius: "12px", border: "1px solid #ccc", marginRight: "10px", boxShadow: "1px 1px 5px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Lista de productos */}
        <div>
          {productosFiltrados.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>No se encontraron productos</p>
          ) : (
            productosFiltrados.map((prod, idx) => (
              <div key={idx} style={{ border: "1px solid #eee", borderRadius: "12px", padding: "15px", marginBottom: "15px", boxShadow: "1px 1px 8px rgba(0,0,0,0.05)" }}>
                <h2 style={{ margin: "0 0 5px 0", color: "#2C3E50" }}>{prod.nombre}</h2>
                <p style={{ margin: "0 0 5px 0", color: "#555" }}>Precio: ${prod.precio}</p>
                <p style={{ margin: "0 0 5px 0", color: "#555" }}>Lugar: {prod.lugar}</p>
                <p style={{ margin: "0 0 10px 0", color: "#27AE60", fontWeight: "bold" }}>Descuento: {prod.descuento}%</p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={{ flex: 1, padding: "10px", borderRadius: "12px", backgroundColor: "#27AE60", color: "white", border: "none", fontWeight: "bold" }} onClick={() => agregarAlCarrito(prod)}>Agregar al carrito</button>
                  <button style={{ flex: 1, padding: "10px", borderRadius: "12px", backgroundColor: "#F1C40F", color: "white", border: "none", fontWeight: "bold" }} onClick={() => vender(prod)}>Vender</button>
                  <button style={{ flex: 1, padding: "10px", borderRadius: "12px", backgroundColor: "#2980B9", color: "white", border: "none", fontWeight: "bold" }} onClick={() => intercambiar(prod)}>Intercambiar</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Carrito */}
        <div style={{ marginTop: "30px", borderTop: "2px solid #eee", paddingTop: "20px" }}>
          <h2 style={{ color: "#1F618D", marginBottom: "15px" }}>🛒 Mi Carrito</h2>
          {carrito.length === 0 ? (
            <p style={{ color: "#888" }}>El carrito está vacío</p>
          ) : (
            <div>
              {carrito.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>{item.nombre} (${(item.precio * (1 - item.descuento / 100)).toFixed(2)})</span>
                  <button style={{ color: "red", border: "none", background: "none", cursor: "pointer" }} onClick={() => setCarrito(carrito.filter(p => p !== item))}>❌</button>
                </div>
              ))}
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>Total: ${totalCarrito.toFixed(2)}</p>
              <button style={{ marginTop: "10px", padding: "10px", borderRadius: "12px", backgroundColor: "#27AE60", color: "white", border: "none", fontWeight: "bold" }} onClick={() => { setMensaje(`✅ Compraste todo el carrito por $${totalCarrito.toFixed(2)}`); setCarrito([]); }}>Comprar Todo</button>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
