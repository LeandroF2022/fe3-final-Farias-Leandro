export default function ListaErrores(props) {
  const { errores } = props;
  return (
    <div className='errores transition-element'>
      <h2 className='transition-element'>
        Errores
      </h2>
      <ol>
        {errores.map(error => (
          <li className='transition-element' key={error.id}>
            {error.nombreError}
          </li>
        ))}
      </ol>
    </div>
  );
}
