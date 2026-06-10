import { useState } from "react"
import { register } from "../services/authService"

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            if(!name || !email || !password) {
                alert('Por favor, completa todos los campos')
                return
            }

            const userData = {
                name, email, password
            }

            const data = await register(userData)
            console.log(data)
            alert(data.message)
            setName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error)
            alert(error.response?.data?.message || 'Ocurrio un error')
        }
    }

    const handleChange = (e) => {        
        const { name, value } = e.target
        if(name === 'name') {
            setName(value)
        } else if(name === 'email') {
            setEmail(value)
        } else if(name=== 'password') {
            setPassword(value)
        }
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input 
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={name}
                onChange={handleChange}
            />
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
            <button type="submit">Registrarse</button>
        </form>
    </section>
  )
}
