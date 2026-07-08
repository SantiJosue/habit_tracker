import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

export default function Login() {
  const defaultValue = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!formData.email || !formData.password) {
        toast.warning("Por favor, completa todos los campos");
        return;
      }

      const userData = {
        email: formData.email,
        password: formData.password,
      };

      const data = await login(userData);
      setFormData(defaultValue);
      toast.success(data.message);

      navigate("/habits", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Ocurrió un error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="flex items-center justify-center h-full">
      <form
        className="flex justify-center flex-col gap-2 w-90 bg-[#3a3a3f] py-4 px-6 rounded font-semibold min-h-80"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          className="border border-[#3a3a3f] w-full p-3 rounded bg-[#313135] hover:border-red-400 outline-0 focus:border-red-400"
          type="email"
          placeholder="Ingresa tu email"
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            className="border border-[#3a3a3f] w-full p-3 rounded bg-[#313135] outline-[#3a3a3f] hover:border-red-400 outline-0 focus:border-red-400"
            type={showPassword ? "text" : "password"}
            placeholder="Ingresa tu password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="absolute top-[50%] right-2.5 translate-y-[-50%] cursor-pointer"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <button
          className="mt-5 bg-[#313135] py-2 px-4 rounded cursor-pointer hover:bg-red-400 transition-colors"
          type="submit"
        >
          Iniciar sesión
        </button>
        <div className="flex justify-center items-center flex-col mt-3 font-normal">
          <p>¿No tienes cuenta?</p>
          <button type="button" className="text-red-400 font-semibold cursor-pointer" onClick={() => navigate('/register')}>Registrarse</button>
        </div>
      </form>
    </section>
  );
}
