import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function DentistId() {
  const navigate = useNavigate();
  const params = useParams();
  const [dentista, setDentista] = useState(null);
  const [loading, setLoading] = useState(true);

  const volverALosDentistas = () => {
    navigate(-1);
  };
  async function fetchDentista() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      if (!response.ok) {
        throw new Error('Error al obtener los datos del dentista.');
      }
      const data = await response.json();
      setDentista(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDentista();
  }, []);

  return (
    <section className='section-dentista-especifico'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Mostrando del miembro de la manada n° {dentista.id} 🐺</h1>
          <article>
            <h2>{dentista.name}</h2>
            <p>{dentista.username}</p>
            <p>Numero de matricula: {dentista.id}</p>
          </article>
        </>
      )}
      <button onClick={volverALosDentistas}>
        Volver al listado de dentistas
      </button>
    </section>
  );
}
