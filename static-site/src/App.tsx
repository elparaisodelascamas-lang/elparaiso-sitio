import { useMemo, useState } from "react";
import {
  BedDouble,
  Clock,
  CreditCard,
  Instagram,
  MapPin,
  Maximize2,
  Menu,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sofa,
  Store,
  Truck,
  X,
} from "lucide-react";

import dormitorioVerde from "@/assets/dormitorio-verde.jpeg";
import { site, waLink } from "@/lib/site-config";
import {
  categorias,
  formatearPrecio,
  fotosTaller,
  fotosTienda,
  productos,
  tamanos,
  type Categoria,
  type Tamano,
} from "@/lib/catalog";

const NAV = [
  { href: "#catalogo", texto: "Catálogo" },
  { href: "#terminaciones", texto: "Terminaciones" },
  { href: "#guia-tamanos", texto: "Guía de tamaños" },
  { href: "#a-medida", texto: "A medida" },
  { href: "#como-comprar", texto: "Cómo comprar" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#faq", texto: "Preguntas" },
  { href: "#visitanos", texto: "Visítanos" },
  { href: "#contacto", texto: "Contacto" },
];

function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-mostaza/25 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-tinta">
      {children}
    </span>
  );
}

function Header() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-tinta/15 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-verde text-crema">
            <BedDouble size={20} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base uppercase leading-tight tracking-wide text-verde">
              El Paraíso de las Camas
            </span>
            <span className="block truncate text-[11px] text-tinta/70">
              Mall del Mueble · Santiago
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-tinta transition-colors hover:text-terracota"
            >
              {n.texto}
            </a>
          ))}
          <a
            href={waLink("Hola, quiero cotizar una cama.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-terracota px-4 py-2 text-sm font-semibold text-crema transition-colors hover:bg-terracota/90"
          >
            Cotizar por WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-tinta/20 text-tinta md:hidden"
        >
          {abierto ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="border-t border-tinta/10 bg-crema px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setAbierto(false)}
                  className="block border-b border-tinta/10 py-3 text-base font-medium text-tinta"
                >
                  {n.texto}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hola, quiero cotizar una cama.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-terracota px-4 py-3 text-sm font-semibold text-crema"
          >
            <MessageCircle size={18} aria-hidden="true" /> Cotizar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="border-b-2 border-tinta/15 bg-verde text-crema">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-crema/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mostaza">
            <Store size={14} aria-hidden="true" /> Barrio Franklin · Santiago
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[1.05] tracking-wide sm:text-5xl md:text-6xl">
            Camas, respaldos y colchones hechos para durar
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-crema/85">
            Fabricación y venta directa en Mall del Mueble, Arturo Prat 2290. Te cotizamos por
            WhatsApp, sin vueltas y con medidas a tu pieza.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hola, quiero cotizar. Me interesa:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-terracota px-6 py-3 text-base font-semibold text-crema transition-colors hover:bg-terracota/90"
            >
              <MessageCircle size={20} aria-hidden="true" /> Cotizar por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-mostaza px-6 py-3 text-base font-semibold text-mostaza transition-colors hover:bg-mostaza hover:text-tinta"
            >
              Ver catálogo
            </a>
          </div>
          <p className="mt-4 text-sm text-crema/80">
            Paga al recibir · Despacho en 24 a 48 hrs · {site.whatsapp.display}
          </p>
        </div>

        <div className="grid gap-3">
          <img
            src={dormitorioVerde}
            alt="Dormitorio con cama tapizada y respaldo acolchado de El Paraíso de las Camas"
            fetchPriority="high"
            decoding="async"
            className="aspect-4/3 w-full rounded-lg border-2 border-crema/20 object-cover"
          />
          <div className="grid grid-cols-3 gap-3">
            {fotosTienda.map((f) => (
              <img
                key={f.url}
                src={f.url}
                alt={f.alt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-md border-2 border-crema/20 object-cover"
              />
            ))}
            <img
              src={fotosTaller[0]!.url}
              alt={fotosTaller[0]!.alt}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-md border-2 border-crema/20 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const BENEFICIOS = [
  { icon: Ruler, titulo: "Medidas a pedido", texto: "Camas y respaldos según el espacio de tu pieza." },
  { icon: ShieldCheck, titulo: "Venta directa", texto: "Compras en el local, sin intermediarios." },
  { icon: Truck, titulo: "Despacho 24 a 48 hrs", texto: "Entregamos tu pedido dentro de 24 a 48 horas." },
  { icon: CreditCard, titulo: "Paga al recibir", texto: "Efectivo, Transferencia y Mercado Pago." },
];

function Beneficios() {
  return (
    <section className="border-b-2 border-tinta/15 bg-crema">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFICIOS.map(({ icon: Icon, titulo, texto }) => (
          <div key={titulo} className="rounded-lg border-2 border-tinta/15 bg-white/60 p-5">
            <Icon size={22} className="text-terracota" aria-hidden="true" />
            <h3 className="mt-3 text-lg uppercase text-verde">{titulo}</h3>
            <p className="mt-1 text-sm text-tinta/80">{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Catalogo() {
  const [categoria, setCategoria] = useState<Categoria | "todos">("todos");
  const [tamano, setTamano] = useState<Tamano | "todos">("todos");

  const filtrados = useMemo(
    () =>
      productos.filter(
        (p) =>
          (categoria === "todos" || p.categoria === categoria) &&
          (tamano === "todos" || p.tamanos.includes(tamano)),
      ),
    [categoria, tamano],
  );

  return (
    <section id="catalogo" className="border-b-2 border-tinta/15 bg-crema scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">Catálogo</h2>
        <p className="mt-2 max-w-prose text-sm text-tinta/80">
          Productos de ejemplo para mostrar la estructura del catálogo.{" "}
          <Pendiente>Contenido pendiente: productos, medidas y precios reales</Pendiente>
        </p>

        <div className="mt-6 space-y-4">
          <fieldset>
            <legend className="mb-2 text-xs font-semibold uppercase tracking-widest text-tinta/70">
              Categoría
            </legend>
            <div className="flex flex-wrap gap-2">
              {categorias.map((c) => (
                <button
                  key={c.valor}
                  type="button"
                  aria-pressed={categoria === c.valor}
                  onClick={() => setCategoria(c.valor)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors ${
                    categoria === c.valor
                      ? "border-verde bg-verde text-crema"
                      : "border-tinta/20 bg-white/60 text-tinta hover:border-verde"
                  }`}
                >
                  {c.etiqueta}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-xs font-semibold uppercase tracking-widest text-tinta/70">
              Tamaño
            </legend>
            <div className="flex flex-wrap gap-2">
              {tamanos.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={tamano === t}
                  onClick={() => setTamano(t)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors ${
                    tamano === t
                      ? "border-terracota bg-terracota text-crema"
                      : "border-tinta/20 bg-white/60 text-tinta hover:border-terracota"
                  }`}
                >
                  {t === "todos" ? "Todos" : t}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <p aria-live="polite" className="mt-6 text-sm text-tinta/70">
          {filtrados.length} producto{filtrados.length === 1 ? "" : "s"}
        </p>

        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((p) => (
            <li
              key={p.id}
              className="flex flex-col overflow-hidden rounded-lg border-2 border-tinta/15 bg-white/70"
            >
              {p.imagen ? (
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover"
                />
              ) : (
                <div className="flex aspect-4/3 w-full items-center justify-center border-b-2 border-dashed border-tinta/20 bg-crema text-center text-xs text-tinta/60">
                  <span>
                    <Sofa size={22} className="mx-auto mb-2 text-tinta/40" aria-hidden="true" />
                    Foto real pendiente
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg uppercase leading-snug text-verde">{p.nombre}</h3>
                <p className="mt-1 text-sm text-tinta/80">{p.descripcion}</p>
                <p className="mt-3 flex flex-wrap gap-1.5">
                  {p.tamanos.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-tinta/20 px-2 py-0.5 text-[11px] text-tinta/70"
                    >
                      {t}
                    </span>
                  ))}
                </p>
                <p className="mt-4 font-display text-xl text-terracota">
                  {formatearPrecio(p.precio)}
                </p>
                {p.pendiente && (
                  <p className="mt-2">
                    <Pendiente>Contenido pendiente</Pendiente>
                  </p>
                )}
                <a
                  href={waLink(`Hola, quiero cotizar: ${p.nombre} (${p.tamanos.join(", ")}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-verde px-4 py-2.5 text-sm font-semibold text-crema transition-colors hover:bg-verde/90"
                >
                  <MessageCircle size={16} aria-hidden="true" /> Cotizar este producto
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PASOS = [
  {
    titulo: "1. Elige tu modelo",
    texto: "Revisa el catálogo o visítanos en el local para ver los modelos disponibles.",
  },
  {
    titulo: "2. Cotiza por WhatsApp",
    texto: `Escríbenos al ${site.whatsapp.display} con la medida que necesitas y te confirmamos precio.`,
  },
  {
    titulo: "3. Recibe en 24 a 48 hrs",
    texto: "Coordinamos el despacho y te entregamos dentro de 24 a 48 horas.",
  },
  {
    titulo: "4. Paga al recibir",
    texto: "Pagas cuando llega tu pedido: Efectivo, Transferencia o Mercado Pago.",
  },
];

function ComoComprar() {
  return (
    <section id="como-comprar" className="border-b-2 border-tinta/15 bg-crema scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">Cómo comprar</h2>
        <p className="mt-2 max-w-prose text-sm text-tinta/80">
          Compra simple, sin registro ni pagos en línea: <strong>paga al recibir</strong>.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((paso) => (
            <li key={paso.titulo} className="rounded-lg border-2 border-tinta/15 bg-white/60 p-5">
              <h3 className="text-lg uppercase text-verde">{paso.titulo}</h3>
              <p className="mt-1 text-sm text-tinta/80">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const FAQ = [
  {
    pregunta: "¿Cuáles son los medios de pago?",
    respuesta: "Aceptamos Efectivo, Transferencia y Mercado Pago.",
  },
  {
    pregunta: "¿Puedo pagar al recibir?",
    respuesta: "Sí. Nuestra modalidad es paga al recibir: pagas cuando te entregamos el producto.",
  },
  {
    pregunta: "¿Cuánto demora el despacho?",
    respuesta: "El despacho se realiza dentro de 24 a 48 horas desde la confirmación del pedido.",
  },
  {
    pregunta: "¿Cuál es el horario de atención?",
    respuesta: "Atendemos de lunes a domingo, de 10:00 a 18:00 hrs, en Mall del Mueble, Arturo Prat 2290.",
  },
];

function Preguntas() {
  return (
    <section id="faq" className="border-b-2 border-tinta/15 bg-crema scroll-mt-20">
      <div className="mx-auto w-full max-w-3xl px-4 py-14">
        <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <dl className="mt-8 space-y-4">
          {FAQ.map((item) => (
            <div key={item.pregunta} className="rounded-lg border-2 border-tinta/15 bg-white/60 p-5">
              <dt className="text-base font-semibold text-verde">{item.pregunta}</dt>
              <dd className="mt-1 text-sm text-tinta/80">{item.respuesta}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Terminaciones() {
  return (
    <section id="terminaciones" className="border-b-2 border-tinta/15 bg-crema scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">
          Terminaciones y personalización
        </h2>
        <p className="mt-2 max-w-prose text-sm text-tinta/80">
          Tapices, diseños geométricos y aplicaciones en espejo cobre hechos en nuestro taller.
          Elige color y diseño según tu pieza.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {fotosTaller.map((f) => (
            <li key={f.url} className="overflow-hidden rounded-lg border-2 border-tinta/15">
              <img
                src={f.url}
                alt={f.alt}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover"
              />
            </li>
          ))}
        </ul>
        <a
          href={waLink("Hola, quiero personalizar el tapiz y las terminaciones de mi respaldo.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-verde px-5 py-3 text-sm font-semibold text-crema transition-colors hover:bg-verde/90"
        >
          <MessageCircle size={18} aria-hidden="true" /> Consultar terminaciones
        </a>
      </div>
    </section>
  );
}

const GUIA_TAMANOS = [
  {
    tamano: "1 plaza",
    medidas: "90 x 190 cm",
    idealPara: "Piezas individuales, niños o espacios pequeños.",
  },
  {
    tamano: "1.5 plazas",
    medidas: "105 x 190 cm",
    idealPara: "Piezas de invitados o adolescentes que buscan más espacio.",
  },
  {
    tamano: "2 plazas",
    medidas: "140 x 190 cm",
    idealPara: "Matrimonial estándar, la medida más común en piezas principales.",
  },
  {
    tamano: "Queen",
    medidas: "160 x 200 cm",
    idealPara: "Parejas que quieren más ancho y una pieza de tamaño mediano a grande.",
  },
  {
    tamano: "King",
    medidas: "180 x 200 cm",
    idealPara: "Máximo confort para dos personas, requiere pieza amplia.",
  },
  {
    tamano: "Super King",
    medidas: "200 x 200 cm",
    idealPara: "Piezas principales grandes o quienes duermen con niños/mascotas.",
  },
];

function GuiaTamanos() {
  return (
    <section id="guia-tamanos" className="border-b-2 border-tinta/15 bg-crema scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="flex items-center gap-2">
          <Maximize2 size={22} className="text-verde" aria-hidden="true" />
          <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">
            Guía de tamaños
          </h2>
        </div>
        <p className="mt-2 max-w-prose text-sm text-tinta/80">
          Estas son las medidas estándar en Chile. Si tu pieza tiene una medida distinta, no hay
          problema: fabricamos camas y respaldos a medida en la sección{" "}
          <a href="#a-medida" className="underline underline-offset-4 hover:text-terracota">
            A medida
          </a>
          .
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border-2 border-tinta/15">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-verde text-crema">
                <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide">
                  Tamaño
                </th>
                <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide">
                  Medidas
                </th>
                <th scope="col" className="px-4 py-3 font-semibold uppercase tracking-wide">
                  Ideal para
                </th>
              </tr>
            </thead>
            <tbody>
              {GUIA_TAMANOS.map((fila, i) => (
                <tr
                  key={fila.tamano}
                  className={i % 2 === 0 ? "bg-white/70" : "bg-crema"}
                >
                  <td className="border-t border-tinta/10 px-4 py-3 font-semibold text-verde">
                    {fila.tamano}
                  </td>
                  <td className="border-t border-tinta/10 px-4 py-3 text-tinta">
                    {fila.medidas}
                  </td>
                  <td className="border-t border-tinta/10 px-4 py-3 text-tinta/80">
                    {fila.idealPara}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-tinta/60">
          <Pendiente>Medidas de referencia</Pendiente>{" "}
          Pueden variar levemente según el modelo. Confírmalas con nosotros por WhatsApp antes de
          comprar.
        </p>

        <a
          href={waLink("Hola, no estoy seguro qué tamaño necesito. ¿Me pueden ayudar?")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-terracota px-5 py-3 text-sm font-semibold text-crema transition-colors hover:bg-terracota/90"
        >
          <MessageCircle size={18} aria-hidden="true" /> No sé qué tamaño necesito
        </a>
      </div>
    </section>
  );
}

function AMedida() {
  const [tipo, setTipo] = useState<"Cama" | "Respaldo">("Cama");
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [detalle, setDetalle] = useState("");

  const partes = [`Hola, quiero cotizar un(a) ${tipo.toLowerCase()} a medida.`];
  if (ancho) partes.push(`Ancho: ${ancho} cm.`);
  if (alto) partes.push(`Alto: ${alto} cm.`);
  if (detalle) partes.push(`Detalle: ${detalle}.`);
  const mensaje = partes.join(" ");

  return (
    <section
      id="a-medida"
      className="border-b-2 border-tinta/15 bg-verde/5 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="flex items-center gap-2">
          <Ruler size={22} className="text-verde" aria-hidden="true" />
          <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">
            Camas y respaldos a medida
          </h2>
        </div>
        <p className="mt-2 max-w-prose text-sm text-tinta/80">
          Con más de 20 años en el barrio Franklin, fabricamos camas y respaldos ajustados al
          espacio exacto de tu pieza. Cuéntanos las medidas y te cotizamos por WhatsApp.
        </p>

        <div className="mt-8 grid max-w-xl gap-5 rounded-lg border-2 border-tinta/15 bg-white/70 p-6">
          <div>
            <span className="mb-2 block text-sm font-semibold text-tinta">¿Qué necesitas?</span>
            <div className="flex gap-2">
              {(["Cama", "Respaldo"] as const).map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  onClick={() => setTipo(opcion)}
                  aria-pressed={tipo === opcion}
                  className={`rounded-md border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                    tipo === opcion
                      ? "border-verde bg-verde text-crema"
                      : "border-tinta/20 text-tinta hover:border-verde"
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-tinta">Ancho (cm)</span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                value={ancho}
                onChange={(e) => setAncho(e.target.value)}
                placeholder="Ej: 140"
                className="w-full rounded-md border-2 border-tinta/20 bg-white px-3 py-2 text-sm text-tinta focus:border-verde focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-tinta">Alto (cm)</span>
              <input
                type="number"
                inputMode="numeric"
                min="0"
                value={alto}
                onChange={(e) => setAlto(e.target.value)}
                placeholder="Ej: 190"
                className="w-full rounded-md border-2 border-tinta/20 bg-white px-3 py-2 text-sm text-tinta focus:border-verde focus:outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-tinta">
              Detalle (opcional)
            </span>
            <textarea
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              placeholder="Ej: espacio bajo la ventana, con cajones, color de tapiz…"
              rows={2}
              className="w-full rounded-md border-2 border-tinta/20 bg-white px-3 py-2 text-sm text-tinta focus:border-verde focus:outline-none"
            />
          </label>

          <a
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-verde px-5 py-3 text-sm font-semibold text-crema transition-colors hover:bg-verde/90"
          >
            <MessageCircle size={18} aria-hidden="true" /> Cotizar a medida por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="border-b-2 border-tinta/15 bg-tinta text-crema scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl uppercase text-mostaza sm:text-4xl">Nosotros</h2>
          <p className="mt-4 text-base leading-relaxed text-crema/85">
            Somos una tienda de camas, respaldos y colchones dentro del Mall del Mueble, en pleno
            barrio Franklin. Atendemos de forma directa: nos cuentas la medida y el uso, y te
            recomendamos lo que realmente te sirve.
          </p>
          <p className="mt-3 text-sm text-crema/70">{site.historia}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img
            src={fotosTaller[0]!.url}
            alt={fotosTaller[0]!.alt}
            loading="lazy"
            decoding="async"
            className="col-span-2 aspect-video w-full rounded-lg border-2 border-crema/20 object-cover"
          />
          <img
            src={fotosTaller[1]!.url}
            alt={fotosTaller[1]!.alt}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-lg border-2 border-crema/20 object-cover"
          />
          <img
            src={fotosTaller[2]!.url}
            alt={fotosTaller[2]!.alt}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-lg border-2 border-crema/20 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Visitanos() {
  return (
    <section id="visitanos" className="border-b-2 border-tinta/15 bg-crema scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl uppercase text-verde sm:text-4xl">Visítanos</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-terracota" aria-hidden="true" />
              <span>
                <strong className="block text-base text-tinta">Dirección</strong>
                {site.direccion.local}, {site.direccion.calle}
                <br />
                {site.direccion.comuna}, {site.direccion.pais}
                {site.direccion.coordsPendiente && (
                  <span className="mt-1 block">
                    <Pendiente>Enlace y coordenadas de Maps por confirmar</Pendiente>
                  </span>
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock size={20} className="mt-0.5 shrink-0 text-terracota" aria-hidden="true" />
              <span>
                <strong className="block text-base text-tinta">Horario</strong>
                {site.horario.texto}
              </span>
            </li>
            <li className="flex gap-3">
              <Instagram size={20} className="mt-0.5 shrink-0 text-terracota" aria-hidden="true" />
              <span>
                <strong className="block text-base text-tinta">Instagram</strong>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-terracota"
                >
                  @{site.instagram.usuario}
                </a>
              </span>
            </li>
          </ul>
          <a
            href={site.direccion.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-md border-2 border-verde px-5 py-3 text-sm font-semibold text-verde transition-colors hover:bg-verde hover:text-crema"
          >
            <MapPin size={18} aria-hidden="true" /> Cómo llegar
          </a>
        </div>

        <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <img
            src={fotosTaller[1]!.url}
            alt="Respaldos y camas exhibidos en nuestro local del Mall del Mueble"
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full rounded-lg border-2 border-tinta/15 object-cover"
          />
          <img
            src={fotosTaller[0]!.url}
            alt="Interior del local con respaldos tapizados en distintos colores"
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full rounded-lg border-2 border-tinta/15 object-cover"
          />
        </div>
        <div className="min-h-64 overflow-hidden rounded-lg border-2 border-tinta/15">
          {/* ⚠️ PENDIENTE: reemplazar por el mapa embebido con las coordenadas reales */}
          <iframe
            title="Mapa de ubicación de El Paraíso de las Camas"
            src="https://www.google.com/maps?q=Arturo%20Prat%202290%20Santiago%20Chile&output=embed"
            loading="lazy"
            className="h-full min-h-64 w-full border-0"
          />
        </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-verde text-crema scroll-mt-20">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl uppercase sm:text-4xl">
          ¿Listo para cotizar tu cama?
        </h2>
        <p className="mt-3 text-base text-crema/85">
          Escríbenos por WhatsApp con la medida que necesitas y te respondemos con precio y plazo.
        </p>
        <a
          href={waLink("Hola, quiero cotizar. Me interesa:")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-mostaza px-7 py-3.5 text-base font-semibold text-tinta transition-colors hover:bg-mostaza/90"
        >
          <MessageCircle size={20} aria-hidden="true" /> Cotizar por WhatsApp
        </a>
        <p className="mt-4 text-sm text-crema/80">
          WhatsApp {site.whatsapp.display} ·{" "}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            @{site.instagram.usuario}
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-tinta text-crema/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-base uppercase tracking-wide text-crema">{site.nombre}</p>
        <p>
          {site.direccion.local}, {site.direccion.calle}, {site.direccion.comuna} ·{" "}
          {site.horario.texto}
        </p>
        <p>
          <a
            href={waLink("Hola, quiero cotizar una cama.")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-mostaza"
          >
            WhatsApp {site.whatsapp.display}
          </a>{" "}
          ·{" "}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-mostaza"
          >
            @{site.instagram.usuario}
          </a>
        </p>
        <p>Paga al recibir · Efectivo, Transferencia y Mercado Pago · Despacho 24 a 48 hrs</p>
        <p className="text-xs text-crema/60">
          © 2026 {site.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function BotonFlotante() {
  return (
    <a
      href={waLink("Hola, quiero cotizar. Me interesa:")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-terracota px-5 py-3.5 text-sm font-semibold text-crema shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mostaza"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden sm:inline">Cotizar</span>
    </a>
  );
}

function Inicio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-crema">
      <a
        href="#catalogo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-verde focus:px-4 focus:py-2 focus:text-crema"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Catalogo />
        <Terminaciones />
        <GuiaTamanos />
        <AMedida />
        <ComoComprar />
        <Nosotros />
        <Preguntas />
        <Visitanos />
        <Contacto />
      </main>
      <Footer />
      <BotonFlotante />
    </div>
  );
}

export default Inicio;
