import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// 🧭 Lista de sedes
const locations = [
  { name: "Toluca", coordinates: [-99.3860, 19.2864] as [number, number], showName: false },
  { name: "Cuautla", coordinates: [-98.9548, 18.8121] as [number, number], showName: false },
  { name: "CDMX", coordinates: [-99.1332, 19.4326] as [number, number] },
  { name: "León", coordinates: [-101.684, 21.122] as [number, number], showName: true },
  { name: "Guadalajara", coordinates: [-103.344, 20.6736] as [number, number], showName: true },
  { name: "Monterrey", coordinates: [-100.3161, 25.6866] as [number, number], showName: true },
];

// 📍 Sedes para el mini-mapa (zona centro)
const centralLocations = [
  { name: "Toluca", coordinates: [-99.3860, 19.2864] as [number, number] },
  { name: "Cuautla", coordinates: [-98.9548, 18.8121] as [number, number] },
  { name: "CDMX", coordinates: [-99.1332, 19.4326] as [number, number] },
];

export default function Locations() {
  const [showModal, setShowModal] = useState(false);

  // Función que abre el modal solo en móvil
  const handleMarkerClick = (name: string) => {
    if (window.innerWidth < 768 && ["Toluca", "Cuautla", "CDMX"].includes(name)) {
      setShowModal(true);
    }
  };

  return (
    <section
      id="locations"
      className="relative h-screen flex flex-col items-center justify-center bg-[var(--color-fenix-black)] text-white overflow-hidden px-6 py-20 md:py-0"
    >
      {/* 🌟 Fondo líquido */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-fenix-red)_0%,transparent_70%)] opacity-10 blur-3xl pointer-events-none" />

      {/* 📱 Títulos (arriba en móvil/tablet) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" w-full flex flex-col mt-12 items-center text-center md:hidden "
      >
        <h3 className="text-[8vw] leading-[7vw] font-extrabold text-[var(--color-fenix-orange)] ">
          Sedes de Competencia
        </h3>
        <h3 className="text-[8vw] leading-[8vw] pt-8 font-bold text-[var(--color-fenix-red)] uppercase tracking-widest drop-shadow-[0_0_25px_var(--color-fenix-red)]">
          Electratón
        </h3>
        <h3 className="text-[14vw] leading-[14vw] font-bold text-[var(--color-fenix-red)] uppercase tracking-widest drop-shadow-[0_0_25px_var(--color-fenix-red)]">
          México
        </h3>
      </motion.div>

      {/* 🗺️ Contenedor flex para desktop */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:h-screen">
        
        {/* 🗺️ Mapa principal */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2  md:h-screen flex items-center justify-center"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1500,
              center: [-102, 25],
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.properties.name === "Mexico")
                  .map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1a1a1a"
                      stroke="var(--color-fenix-orange)"
                      strokeWidth={0.5}
                    />
                  ))
              }
            </Geographies>

            {/* 📍 Marcadores principales */}
            {locations.map(({ name, coordinates, showName }, i) => (
              <Marker key={i} coordinates={coordinates} onClick={() => handleMarkerClick(name)}>
                <motion.circle
                  r={6}
                  fill="var(--color-fenix-red)"
                  stroke="var(--color-fenix-orange)"
                  strokeWidth={2}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="cursor-pointer"
                />
                {showName && (
                  <text
                    textAnchor="middle"
                    y={name === "Guadalajara" ? 20 : -15}
                    className="fill-[var(--color-fenix-orange)] text-sm font-semibold select-none"
                  >
                    {name}
                  </text>
                )}
              </Marker>
            ))}
          </ComposableMap>

          {/* 🔍 Mini-mapa auxiliar (solo escritorio) */}
          <div className="absolute right-15 top-1/2 -translate-y-3/4 hidden md:block w-[15vw] h-[15vw] bg-[rgba(10,10,10,0.6)] border border-[rgba(255,255,255,0.1)] rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.3)] overflow-hidden">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 35000,
                center: [-99.2, 19.2],
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography="https://raw.githubusercontent.com/strotgen/mexico-leaflet/master/states.geojson">
                {({ geographies }: any) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#151515"
                      stroke="var(--color-fenix-orange)"
                      strokeWidth={0.6}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          fill: "var(--color-fenix-gray)",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>

              {centralLocations.map(({ name, coordinates }, i) => (
                <Marker key={i} coordinates={coordinates}>
                  <motion.circle
                    r={20}
                    fill="var(--color-fenix-red)"
                    stroke="var(--color-fenix-orange)"
                    strokeWidth={1.5}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <text
                    textAnchor="middle"
                    y={-50}
                    className="fill-[var(--color-fenix-orange)] text-[40px] font-medium"
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </motion.div>

        {/* 📄 Texto (derecha en desktop, abajo en móvil) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 w-full md:w-1/2 flex flex-col flex-wrapjustify-center items-center md:items-start text-center md:text-left px-4 md:px-12"
        >
          {/* Títulos solo en desktop */}
          <div className="hidden md:block mb-6">
            <h2 className="text-[2vw]  font-extrabold text-[var(--color-fenix-orange)] mb-4">
              Sedes de Competencia
            </h2>
            <h3 className="text-[4.1vw] md:text-[3.8vw] leading-[4.1vw] font-bold text-[var(--color-fenix-red)] uppercase tracking-widest drop-shadow-[0_0_25px_var(--color-fenix-red)]">
              Electratón México
            </h3>
          </div>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-lg">
            Competimos en <strong>6 sedes nacionales</strong> del campeonato <strong>Electratón México</strong>:  
            <br />
            Toluca, La Marquesa, Cuautla (Morelos), León (Gto), Guadalajara y Monterrey.  
          </p>

          <div className="w-28 h-[3px] bg-gradient-to-r from-[var(--color-fenix-orange)] to-[var(--color-fenix-red)] rounded-full mt-8"></div>
        </motion.div>
      </div>

      {/* 📱 Modal del mini-mapa (solo móvil) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-[90vw] h-[70vw] max-w-md bg-[rgba(10,10,10,0.85)] rounded-xl border border-[rgba(255,255,255,0.1)] shadow-[0_0_25px_var(--color-fenix-orange)] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 35000,
                  center: [-99.2, 19.2],
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography="https://raw.githubusercontent.com/strotgen/mexico-leaflet/master/states.geojson">
                  {({ geographies }: any) =>
                    geographies.map((geo: any) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#151515"
                        stroke="var(--color-fenix-orange)"
                        strokeWidth={0.6}
                      />
                    ))
                  }
                </Geographies>

                {centralLocations.map(({ name, coordinates }, i) => (
                  <Marker key={i} coordinates={coordinates}>
                    <motion.circle
                      r={18}
                      fill="var(--color-fenix-red)"
                      stroke="var(--color-fenix-orange)"
                      strokeWidth={1.5}
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <text
                      textAnchor="middle"
                      y={-40}
                      className="fill-[var(--color-fenix-orange)] text-[28px] font-medium"
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}