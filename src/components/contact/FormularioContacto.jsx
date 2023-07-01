import { useState } from 'react';
import ListaErrores from './ListaErrores';

export default function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [errores, setErrores] = useState([]);
  const [exito, setExito] = useState(false);

  function agregarError(errorNuevo) {
    setErrores(prevErrors => [
      ...prevErrors,
      { nombreError: errorNuevo, id: generarId() }
    ]);
  }

  function esCorreoElectronico(cadena) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(cadena);
  }

  function validarFormulario() {
    let resultado = true;
    setErrores([]);

    if (nombre.trim().length < 5) {
      agregarError('El nombre debe tener al menos 5 caracteres');
      resultado = false;
    }

    if (!esCorreoElectronico(mail)) {
      agregarError('El correo no es válido');
      resultado = false;
    }

    setExito(resultado);
    return resultado;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (validarFormulario()) {
      setExito(true);
      setMail('');
      setNombre('');
    }
  };

  const changeNombre = e => {
    setNombre(e.target.value);
  };

  const changeMail = e => {
    setMail(e.target.value);
  };

  return (
    <section className='section-form transition-element'>
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' value={nombre} onChange={changeNombre} />
        <label htmlFor='mail'>Correo</label>
        <input type='text' id='mail' value={mail} onChange={changeMail} />
        <button type='submit'>Enviar</button>
        {exito && (
          <p className='exito transition-element'>
            Registrado correctamente, ¡gracias!
          </p>
        )}
        {errores.length > 0 && <ListaErrores errores={errores} />}
      </form>
    </section>
  );
}
