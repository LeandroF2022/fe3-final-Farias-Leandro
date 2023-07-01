import userImage from '../../assets/user.png'
import { BsFillTrashFill } from 'react-icons/bs'
export default function Card(props) {
  const { odontologoFavorito, eliminarOdontologoFavorito } = props

  return (
    <li className='card '>
      <img src={userImage} alt='Imagen de usuario' />
      <div class="linea"></div>

      <p>
        <span className='titulo'>Nombre:</span> {odontologoFavorito.name}
      </p>
      <div class="linea"></div>

      <p>
        <span className='titulo'>Apellido:</span> {odontologoFavorito.username}
      </p>
      <div class="linea"></div>

      <BsFillTrashFill
        className='eliminar'
        onClick={() => eliminarOdontologoFavorito(odontologoFavorito)}
      />
    </li>
  )
}
