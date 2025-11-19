import React, { useState } from "react";
import { CityNetwork } from "./structures/CityNetwork";
import GraphViz from "./components/Graph";

const createInitialNetwork = () => {
  const net = new CityNetwork();
  net.addCity("Cali");
  net.addCity("Bogotá");
  net.connectCities("Cali", "Bogotá");
  return net;
};

function App() {
  const [network] = useState(() => createInitialNetwork());
  const [renderVersion, setRenderVersion] = useState(0);

  const [newCityName, setNewCityName] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");

  const [zoneName, setZoneName] = useState("");
  const [parentZoneName, setParentZoneName] = useState("");

  const [editOldZoneName, setEditOldZoneName] = useState("");
  const [editNewZoneName, setEditNewZoneName] = useState("");

  const [connectCityA, setConnectCityA] = useState("");
  const [connectCityB, setConnectCityB] = useState("");

  const forceRender = () => setRenderVersion((v) => v + 1);

  const handleAddCity = (e) => {
    e.preventDefault();
    if (!newCityName.trim()) return;
    network.addCity(newCityName.trim());
    if (!selectedCityName) {
      setSelectedCityName(newCityName.trim());
    }
    setNewCityName("");
    forceRender();
  };

  const handleDeleteCity = () => {
    if (!selectedCityName) return;
    network.deleteCity(selectedCityName);
    setSelectedCityName("");
    forceRender();
  };

  const handleSelectCity = (name) => {
    setSelectedCityName(name);
  };

  const handleAddZone = (e) => {
    e.preventDefault();
    if (!selectedCityName) return;
    if (!zoneName.trim()) return;

    const city = network.getCity(selectedCityName);
    if (!city) return;

    const zone = zoneName.trim();
    const parent = parentZoneName.trim() || null;

    city.addZone(zone, parent);
    setZoneName("");
    setParentZoneName("");
    forceRender();
  };

  const handleEditZone = (e) => {
    e.preventDefault();
    if (!selectedCityName) return;
    if (!editOldZoneName.trim() || !editNewZoneName.trim()) return;

    const city = network.getCity(selectedCityName);
    if (!city) return;

    city.editZoneName(editOldZoneName.trim(), editNewZoneName.trim());
    setEditOldZoneName("");
    setEditNewZoneName("");
    forceRender();
  };

  const handleConnectCities = (e) => {
    e.preventDefault();
    if (!connectCityA || !connectCityB) return;
    if (connectCityA === connectCityB) return;
    network.connectCities(connectCityA, connectCityB);
    forceRender();
  };

  const selectedCity = selectedCityName
    ? network.getCity(selectedCityName)
    : null;

  const stats = selectedCity ? selectedCity.getZonesStats() : null;

  const renderZoneTree = (node) => {
    if (!node) return null;
    return (
      <ul>
        <li>
          {node.name}
          {node.children.length > 0 && (
            <ul>
              {node.children.map((child, index) => (
                <li key={`${child.name}-${index}`}>{renderZoneTree(child)}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    );
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>Red de Ciudades y Zonas Verdes</h1>

      {/* FORMULARIO: AGREGAR CIUDAD */}
      <section>
        <h2>Agregar Ciudad</h2>
        <form onSubmit={handleAddCity}>
          <input
            type="text"
            placeholder="Nombre de la ciudad"
            value={newCityName}
            onChange={(e) => setNewCityName(e.target.value)}
          />
          <button type="submit">Agregar ciudad</button>
        </form>
      </section>

      {/* LISTA DE CIUDADES */}
      <section>
        <h2>Ciudades en la red</h2>
        {network.cities.length === 0 ? (
          <p>No hay ciudades aún.</p>
        ) : (
          <ul>
            {network.cities.map((city) => (
              <li key={city.name}>
                <button onClick={() => handleSelectCity(city.name)}>
                  {city.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* CONECTAR CIUDADES (GRAFO) */}
      <section>
        <h2>Conectar ciudades (Grafo)</h2>
        <form onSubmit={handleConnectCities}>
          <select
            value={connectCityA}
            onChange={(e) => setConnectCityA(e.target.value)}
          >
            <option value="">Ciudad A</option>
            {network.cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={connectCityB}
            onChange={(e) => setConnectCityB(e.target.value)}
          >
            <option value="">Ciudad B</option>
            {network.cities.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button type="submit">Conectar</button>
        </form>

        <h3>Lista de adyacencia</h3>
        {Object.keys(network.adjacency).length === 0 ? (
          <p>No hay conexiones aún.</p>
        ) : (
          <ul>
            {Object.entries(network.adjacency).map(([cityName, neighbors]) => (
              <li key={cityName}>
                <strong>{cityName}:</strong>{" "}
                {neighbors.length > 0 ? neighbors.join(", ") : "sin vecinos"}
              </li>
            ))}
          </ul>
        )}

        <h3>Visualización del grafo</h3>
        <GraphViz
          adjacency={network.adjacency}
          selectedCityName={selectedCityName}
        />
      </section>

      {/* RESUMEN GENERAL DE LA RED */}
      <section>
        <h2>Resumen de la red</h2>
        <p>Número de ciudades: {network.cities.length}</p>
        <p>
          Total de zonas verdes en toda la red:{" "}
          {network.cities.reduce((acc, city) => {
            const s = city.getZonesStats();
            return acc + s.totalZones;
          }, 0)}
        </p>
      </section>

      {/* DETALLE DE CIUDAD SELECCIONADA */}
      <section>
        <h2>Detalle de la ciudad seleccionada</h2>
        {!selectedCity ? (
          <p>Selecciona una ciudad para ver sus zonas verdes.</p>
        ) : (
          <>
            <h3>{selectedCity.name}</h3>
            <button onClick={handleDeleteCity}>Eliminar ciudad</button>

            {/* Vecinos de la ciudad seleccionada */}
            <h4>Conexiones de la ciudad</h4>
            <p>
              Vecinos:{" "}
              {network.adjacency[selectedCity.name] &&
              network.adjacency[selectedCity.name].length > 0
                ? network.adjacency[selectedCity.name].join(", ")
                : "sin vecinos"}
            </p>
            <p>
              Grado (número de conexiones):{" "}
              {network.adjacency[selectedCity.name]
                ? network.adjacency[selectedCity.name].length
                : 0}
            </p>

            <h4>Estadísticas de zonas verdes</h4>
            <p>Total de zonas verdes: {stats.totalZones}</p>
            <p>Altura máxima del árbol de zonas: {stats.maxHeight}</p>

            <h4>Árbol de zonas verdes</h4>
            {selectedCity.rootZone ? (
              renderZoneTree(selectedCity.rootZone)
            ) : (
              <p>Esta ciudad aún no tiene zonas verdes.</p>
            )}

            {/* FORM: AGREGAR ZONA VERDE */}
            <h4>Agregar zona verde</h4>
            <form onSubmit={handleAddZone}>
              <input
                type="text"
                placeholder="Nombre de la zona"
                value={zoneName}
                onChange={(e) => setZoneName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nombre zona padre (opcional)"
                value={parentZoneName}
                onChange={(e) => setParentZoneName(e.target.value)}
              />
              <button type="submit">Agregar zona</button>
            </form>
            <p>
              Nota: La primera zona de una ciudad debe agregarse sin padre para
              que sea la raíz. Las siguientes deben indicar un padre existente.
            </p>

            {/* FORM: EDITAR ZONA VERDE */}
            <h4>Editar nombre de zona verde</h4>
            <form onSubmit={handleEditZone}>
              <input
                type="text"
                placeholder="Nombre actual de la zona"
                value={editOldZoneName}
                onChange={(e) => setEditOldZoneName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nuevo nombre"
                value={editNewZoneName}
                onChange={(e) => setEditNewZoneName(e.target.value)}
              />
              <button type="submit">Editar zona</button>
            </form>
          </>
        )}
      </section>

      {/* Para evitar warning de variable sin uso */}
      <div style={{ display: "none" }}>{renderVersion}</div>
    </div>
  );
}

export default App;