import { Check, Flame, Pencil, Trash2 } from "lucide-react"

export default function HabitCard({habit, isCompleteToday, handleCompleteHabit, handleEditHabit, handleRemoveHabit}) {
    const isComplete = isCompleteToday(habit.lastCompletedAt)

    const frequencyLabels = {
        daily: 'Diario',
        weekly: 'Semanal'
    }
    
    return (
        <div
        className="p-5 shadow-xl bg-[#3a3a3f] rounded flex flex-col justify-center items-center gap-4"
        key={habit._id}
        >
        <div className="flex flex-col items-center justify-between gap-2">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
            <div className="flex flex-col flex-wrap overflow-auto justify-center items-center w-full sm:w-50 bg-[#505057] rounded">
                <p className="text-lg font-semibold">{habit.name}</p>
                <p>{frequencyLabels[habit.frequency]}</p>
            </div>
            <div className="flex items-center justify-center w-full sm:w-30 text-xl font-semibold bg-[#505057] p-3 rounded gap-1">
                <p><span className="text-[16px]">Racha:</span> {habit.streak}</p>
                <Flame color="orange" strokeWidth={4} />
            </div>
            </div>
            <div className="flex justify-center mt-3">
            <button 
                className={isComplete
                ? "w-50 bg-[#505057] opacity-50 p-1 rounded flex gap-2 items-center justify-center"
                : "w-50 bg-[#505057] p-1 rounded cursor-pointer hover:bg-[#232325] flex gap-2 items-center justify-center"}
                type="button"
                onClick={() => handleCompleteHabit(habit._id)}
                disabled={isComplete}
            >
                <span className="font-semibold">
                Completada
                </span>
                <Check size={16} />
            </button>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button
            className="bg-[#313135] py-2 px-4 rounded cursor-pointer hover:bg-[#232325] transition-colors flex items-center justify-center gap-2 w-full"
            onClick={() => handleEditHabit(habit._id)}
            >
            Editar hábito
            <span>
                <Pencil size={16} />
            </span>
            </button>
            <button
            className="bg-red-400 py-2 px-4 rounded cursor-pointer hover:bg-red-500 transition-colors flex items-center justify-center gap-2 w-full"
            onClick={() => handleRemoveHabit(habit._id)}
            >
            Borrar hábito
            <span>
                <Trash2 size={16} />
            </span>
            </button>
        </div>
        </div>
    )
}
