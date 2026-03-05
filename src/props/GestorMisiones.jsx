import { useState } from 'react'


const GestorMisiones = () => {
    const [misiones, setMisiones] = useState ([]);
    const [nuevaMision, setNuevaMision] = useState ("");
    const agregarMision = (evento) => {
        evento.preventDefault ();
    if (nuevaMision.trim() === "") return;
    setMisiones([...misiones,nuevaMision]);
    setNuevaMision("");
    };
    const eliminarMision = (indiceABorrar) => {
      const misionesFiltradas = misiones.filter((mision, indice) => indice
      !== indiceABorrar);
      setMisiones(misionesFiltradas);
    };
  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '400px', margin: 'auto'}}>
    <h2>Mi Diario De Misiones</h2>
    <form onSubmit={agregarMision}>
      <input type='text' placeholder='Ej: Derrotar al dragon (limpiar el cuarto)' value={nuevaMision}
      
      onChange={(e) => setNuevaMision(e.target.value)}
      style={{ padding: '8px', width: '70%' }}
      />
      <button type='submit' style={{padding: '8px'}}>Añadir</button>
    </form>
    <ul>
      {misiones.length === 0 ?(
        <p>No tienes misiones activas. !ve a descansar¡</p>
      ) : (
        misiones.map((mision, indice) => (
        <li key={indice} style={{ marginTop: '10px' }}>
          {mision}
          <button onClick={() => eliminarMision(indice)} style={{ marginLeft: '10px', color: 'red' }}>Abandonar</button>
        </li>
        ))
      )}
    </ul>
    </div>
  );
}

export default GestorMisiones