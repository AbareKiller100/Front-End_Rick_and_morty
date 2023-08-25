import { useState } from "react"

const SearchBar = ({onSearch}) => {

  const [id, setId]=useState("");

  const handleChange=(event)=>{
    setId(event.target.value)
  }

  return (
    <div>
        <input type="text" onChange={handleChange} value={id}/>
        <button onClick={()=> onSearch(id)}>Buscar</button>
    </div>
  )
}

export default SearchBar