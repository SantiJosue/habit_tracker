import { Pencil, Plus } from "lucide-react";

export default function HabitForm({habit, handleSubmit, handleChange, editingHabitId, isEditing}) {
  return (
    <form
        className="w-full max-w-md p-8 shadow-xl bg-[#3a3a3f] rounded gap-4 font-semibold"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5 w-full items-center">
          <h2 className="text-2xl font-bold">
            {editingHabitId && isEditing ? "Editar hábito" : "Nuevo hábito"}
          </h2>
          <input
            className="border border-[#3a3a3f] w-full p-3 rounded bg-[#313135] hover:border-red-400 outline-0 focus:border-red-400"
            type="text"
            name="name"
            placeholder="Nombre del hábito"
            value={habit.name}
            onChange={handleChange}
          />
          <select
            className="border border-[#3a3a3f] w-full p-3 rounded bg-[#313135] hover:border-red-400 outline-0 focus:border-red-400"
            name="frequency"
            value={habit.frequency}
            onChange={handleChange}
          >
            <option value="">Selecciona frecuencia</option>
            <option value="daily">Diario</option>
            <option value="weekly">Semanal</option>
          </select>
          <button
            className="bg-red-400 py-2 px-4 rounded cursor-pointer hover:opacity-90 transition-colors w-50 flex justify-center"
            type="submit"
          >
            {editingHabitId && isEditing ? (
              <span className="flex gap-2 items-center">
                <p>Actualizar hábito</p>
                <Pencil size={16} />
              </span>
            ) : (
              <span className="flex gap-2 items-center">
                <p>Crear hábito</p>
                <Plus size={16} />
              </span>
            )}
          </button>
        </div>
      </form>
  )
}
