/**
 * ⚠️ CATÁLOGO DE EJEMPLO — CONTENIDO PENDIENTE
 * Todos los productos aquí son ejemplos de estructura, no ofertas reales.
 * Reemplaza nombre, descripción, medidas, precio e imagen con datos reales.
 * Si `precio` es null se muestra "Consultar precio".
 */

import camaGrisCobre from "@/assets/cama-gris-cobre.jpeg.asset.json";
import camaGrisCobre2 from "@/assets/cama-gris-cobre-2.jpeg.asset.json";
import dormitorioVerde from "@/assets/dormitorio-verde.jpeg.asset.json";
import dormitorioBeige from "@/assets/dormitorio-beige.jpeg.asset.json";
import respaldoBeige from "@/assets/respaldo-beige.jpeg.asset.json";
import taller1 from "@/assets/img_0554.jpeg.asset.json";
import taller2 from "@/assets/img_0555.jpeg.asset.json";
import taller3 from "@/assets/img_0556.jpeg.asset.json";

/** Fotos reales del taller y la tienda en Mall del Mueble */
export const fotosTaller = [
  {
    url: taller1.url,
    alt: "Respaldos tapizados con diseño geométrico en el taller de El Paraíso de las Camas",
  },
  {
    url: taller2.url,
    alt: "Respaldo gris con paneles triangulares y detalles en espejo cobre",
  },
  {
    url: taller3.url,
    alt: "Detalle de tapiz negro acolchado con aplicaciones de espejo cobre",
  },
];

export const fotosTienda = [
  { url: camaGrisCobre2.url, alt: "Cama tapizada gris con detalles en espejo cobre" },
  { url: dormitorioBeige.url, alt: "Dormitorio con cama y respaldo tapizado beige" },
];

export type Categoria = "camas" | "respaldos" | "colchones";
export type Tamano = "1 plaza" | "1.5 plazas" | "2 plazas" | "King" | "Super King";

export interface Producto {
  id: string;
  nombre: string;
  categoria: Categoria;
  tamanos: Tamano[];
  descripcion: string;
  /** null = sin precio real cargado → se muestra "Consultar precio" */
  precio: number | null;
  imagen: string | null;
  pendiente: boolean;
}

export const categorias: { valor: Categoria | "todos"; etiqueta: string }[] = [
  { valor: "todos", etiqueta: "Todos" },
  { valor: "camas", etiqueta: "Camas" },
  { valor: "respaldos", etiqueta: "Respaldos" },
  { valor: "colchones", etiqueta: "Colchones" },
];

export const tamanos: (Tamano | "todos")[] = [
  "todos",
  "1 plaza",
  "1.5 plazas",
  "2 plazas",
  "King",
  "Super King",
];

export const productos: Producto[] = [
  {
    id: "cama-americana",
    nombre: "Cama americana (ejemplo)",
    categoria: "camas",
    tamanos: ["1.5 plazas", "2 plazas", "King"],
    descripcion: "Base más colchón. Medidas y terminaciones por confirmar con el local.",
    precio: null,
    imagen: dormitorioVerde.url,
    pendiente: true,
  },
  {
    id: "cama-division",
    nombre: "Cama división con cajones (ejemplo)",
    categoria: "camas",
    tamanos: ["1.5 plazas", "2 plazas"],
    descripcion: "Base división con cajones. Capacidad y materiales por confirmar.",
    precio: null,
    imagen: camaGrisCobre.url,
    pendiente: true,
  },
  {
    id: "respaldo-capitone",
    nombre: "Respaldo capitoné (ejemplo)",
    categoria: "respaldos",
    tamanos: ["1.5 plazas", "2 plazas", "King"],
    descripcion: "Respaldo tapizado. Telas, colores y alto por confirmar.",
    precio: null,
    imagen: respaldoBeige.url,
    pendiente: true,
  },
  {
    id: "respaldo-liso",
    nombre: "Respaldo liso (ejemplo)",
    categoria: "respaldos",
    tamanos: ["1 plaza", "1.5 plazas", "2 plazas"],
    descripcion: "Respaldo tapizado liso. Medidas por confirmar.",
    precio: null,
    imagen: taller2.url,
    pendiente: true,
  },
  {
    id: "colchon-resorte",
    nombre: "Colchón de resortes (ejemplo)",
    categoria: "colchones",
    tamanos: ["1 plaza", "1.5 plazas", "2 plazas", "King", "Super King"],
    descripcion: "Firmeza y alto por confirmar según marca disponible en tienda.",
    precio: null,
    imagen: camaGrisCobre2.url,
    pendiente: true,
  },
  {
    id: "colchon-espuma",
    nombre: "Colchón de espuma (ejemplo)",
    categoria: "colchones",
    tamanos: ["1 plaza", "1.5 plazas", "2 plazas"],
    descripcion: "Densidad y garantía por confirmar con el local.",
    precio: null,
    imagen: dormitorioBeige.url,
    pendiente: true,
  },
];

export function formatearPrecio(precio: number | null): string {
  if (precio === null) return "Consultar precio";
  return precio.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });
}
