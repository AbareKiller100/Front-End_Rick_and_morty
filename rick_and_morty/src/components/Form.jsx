import {useState} from 'react'
import validation from '../validation'

const Form = ({login}) => {

  const [userData, setUserData]=useState({
    email:"", password:""
  })

  const [errors, setErrors]=useState({})

  const handleChange=(event)=>{
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const [button, setButton]=useState(false)

  const handleSubmit=(event)=>{
    event.preventDefault();
    setButton(true)
    login(userData);
  }


  // const handleButton=(event)=>{
  //   event.preventDefault()
  //   setButton(true)
  // }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange}/>
        <p>{ button && errors.email && errors.email}</p>
        <hr/>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange}/>
        <p>{button && errors.password && errors.password}</p>
        <hr/>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form