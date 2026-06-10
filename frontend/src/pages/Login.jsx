import { useState } from "react"
import { login } from "../services/authService"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() 

  const handleSubmit = async (e) => {
      try {
          e.preventDefault()

          if(!email || !password) {
              alert('Por favor, completa todos los campos')
              return
          }

          const userData = {
            email, password
          }

          const data = await login(userData)
          alert(data.message)

          setEmail('')
          setPassword('')
          navigate('/habits')
      } catch (error) {
          console.error(error)
          alert(error.response?.data?.message || 'Ocurrió un error')
      }
  }

  const handleChange = (e) => {        
      const { name, value } = e.target
      
      if(name === 'email') {
          setEmail(value)
      } else if(name=== 'password') {
          setPassword(value)
      }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            value={email}
            onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input 
            type="password"
            placeholder="Ingresa tu password"
            name="password"
            value={password}
            onChange={handleChange}
        />
        <button type="submit">Iniciar sesión</button>
        </form>
    </section>
  )
}
