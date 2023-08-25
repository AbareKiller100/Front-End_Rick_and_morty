import { Link } from "react-router-dom"
import { addFav, removeFav } from "../redux/actions"
import {connect} from "react-redux"

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav}) => {
  return (
    <div>
        <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin.name}</h2>
        <img src={image} alt="Imagen de personaje"/>
        <button onClick={()=> onClose(id)}>Cerrar</button>
    </div>
  )
}

mapDispatchToProps=(dispatch)=>{
  return {
    addFav: (character)=> dispatch(addFav(character)),
    removeFav: (id)=> dispatch(removeFav(id))
  }
}

export default connect(null, mapDispatchToProps)(Card)