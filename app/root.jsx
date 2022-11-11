import { useState } from "react";
import {
  LiveReload,
  Meta,
  Links,
  Outlet,
  Scripts,
  useCatch,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width, initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}
export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //rescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      // nuevo registro
      setCarrito([...carrito, guitarra]);
    }
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
        }}
      />
    </Document>
  );
}
function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBondary() {
  const error = useCatch();
  return (
    <Document>
      <p>
        {error.status} {error.statusText}
      </p>
    </Document>
  );
}
export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p>
        {error.status} {error.statusText}
      </p>
    </Document>
  );
}
