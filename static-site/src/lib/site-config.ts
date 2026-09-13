/**
 * Datos comerciales del sitio.
 * Los campos marcados con `pendiente: true` se muestran como "Por confirmar".
 */

export const site = {
  nombre: "El Paraíso de las Camas",
  rubro: "Camas, respaldos y colchones",

  direccion: {
    local: "Mall del Mueble",
    calle: "Arturo Prat 2290 y 2293",
    comuna: "Santiago Centro",
    pais: "Chile",
    // ⚠️ PENDIENTE: reemplazar por el enlace real de Google Maps del local
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Arturo+Prat+2290+Santiago+Centro+Chile",
    // ⚠️ PENDIENTE: coordenadas exactas del local (referenciales por ahora)
    lat: -33.4569,
    lng: -70.6483,
    coordsPendiente: true,
  },

  historia:
    "Con más de 20 años en el barrio Franklin, fabricamos y vendemos camas económicas y de calidad, sin intermediarios.",

  whatsapp: {
    numero: "56998632238",
    display: "+56 9 9863 2238",
    pendiente: false,
    fallbackUrl: "https://wa.me/",
  },

  instagram: {
    usuario: "elparaisodelascamas",
    url: "https://instagram.com/elparaisodelascamas",
    pendiente: false,
  },

  horario: {
    texto: "Lunes a domingo, 10:00 a 18:00 hrs",
    pendiente: false,
  },

  pagoYDespacho: {
    destacado: "Paga al recibir",
    pago: "Efectivo, Transferencia y Mercado Pago",
    mediosPago: ["Efectivo", "Transferencia", "Mercado Pago"],
    despacho: "Despacho dentro de 24 a 48 hrs",
    pendiente: false,
  },
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado y fallback editable. */
export function waLink(mensaje: string): string {
  const texto = encodeURIComponent(mensaje);
  if (site.whatsapp.pendiente || !site.whatsapp.numero) {
    return `${site.whatsapp.fallbackUrl}?text=${texto}`;
  }
  return `https://wa.me/${site.whatsapp.numero}?text=${texto}`;
}

export const mensajeGeneral = `Hola ${site.nombre}, quiero cotizar. Me interesa:`;
