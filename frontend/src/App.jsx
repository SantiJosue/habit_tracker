import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const location = useLocation()
  
  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <section className="bg-[#1b1b1f] min-h-screen flex flex-col text-white">
      <header className="h-20 bg-[#1b1b1d] flex items-center justify-between mx-10">
        <h2 className="text-2xl font-bold">Habits <span className="text-red-400">Tracker</span></h2>
        {location.pathname === '/habits' && 
        <button 
          className="bg-red-400 hover:bg-red-500 font-semibold py-2 px-4 rounded cursor-pointer  transition-colors w-50 flex justify-center"
          onClick={handleLogOut}
        >
          Cerrar Sesión
        </button>}
      </header>
      <main className="bg-[#212124] py-5 flex flex-1 items-center justify-center min-w-full">
        <AppRoutes />
      </main>
      <footer className="h-20 bg-[#1b1b1d] flex items-center justify-center">
        <p className="text-gray-600 font-semibold">Todos los derechos reservados</p>
      </footer>
    </section>
  )
}
