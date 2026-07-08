import { useEffect, useState } from "react";
import {
  completeHabit,
  createHabit,
  editHabit,
  getHabits,
  removeHabit,
} from "../services/habitService";
import HabitForm from "../components/HabitForm";
import HabitCard from "../components/HabitCard";
import { toast } from 'react-toastify'

export default function Habits() {
  const defaultValue = {
    name: "",
    frequency: "",
  };
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState(defaultValue);
  const [editingHabitId, setEditingHabitId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await getHabits();
        setHabits(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchHabits();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const habitData = {
        name: habit.name,
        frequency: habit.frequency,
      };

      if (!habit.name || !habit.frequency) {
        toast.warning("Ingresa un nombre y frecuencia")
        return;
      }

      if (editingHabitId && isEditing === true) {
        const response = await editHabit(editingHabitId, habit);
        setHabits((habits) =>
          habits.map((habit) =>
            habit._id === editingHabitId ? response.data : habit,
          ),
        );
        toast.success(response.message);
        setHabit(defaultValue);
        setEditingHabitId(null);
      } else {
        const response = await createHabit(habitData);

        setHabits((prev) => [...prev, response.data]);
        toast.success(response.message);
        setHabit(defaultValue);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Ocurrió un error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit((prevHabit) => ({
      ...prevHabit,
      [name]: value,
    }));
  };

  const handleEditHabit = async (habitId) => {
    setIsEditing(true);
    setEditingHabitId(habitId);
    const selectedHabit = habits.find((habit) => habit._id === habitId);
    setHabit({
      name: selectedHabit.name,
      frequency: selectedHabit.frequency,
    });
  };

  const handleRemoveHabit = async (habitId) => {
    const previousHabits = [...habits];
    try {
      setHabits((habits) => habits.filter((habit) => habit._id !== habitId));
      const response = await removeHabit(habitId);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Ocurrió un error");
      setHabits(() => previousHabits);
    }
  };

  const handleCompleteHabit = async (habitId) => {
    try {
      const response = await completeHabit(habitId)
      setHabits((habits) => habits.map((habit) => habit._id === habitId ? response.data : habit))
      toast.success(response?.message)
    } catch (error) {
      console.log(error.response.data)
      toast.error(error.response?.data?.message || "Ocurrió un error")
    }
  }

  const isCompleteToday = (lastCompletedAt) => {
    if(!lastCompletedAt) return false

    const today = new Date()

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    )

    const lastDate = new Date(lastCompletedAt)

    const lastCompleteDate = new Date(
      lastDate.getFullYear(),
      lastDate.getMonth(),
      lastDate.getDate()
    )

    const diffTime = todayDate - lastCompleteDate

    const diffDays = diffTime / (1000 * 60 * 60 * 24)
    
    return diffDays === 0
  }

  return (
    <section className="mx-2 my-10 flex flex-col items-center gap-5">
      <HabitForm
        handleSubmit={handleSubmit}
        editingHabitId={editingHabitId}
        isEditing={isEditing}
        habit={habit}
        handleChange={handleChange}
      />
      <div className="mx-8 p-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <h1 className="mt-10 text-2xl text-gray-300 font-semibold col-span-full">
          {!habits.length ? "" : "Gestiona tus habitos"}
        </h1>
        {habits.length > 0 ? (
          habits.map((habit) => (
            <HabitCard 
              key={habit._id}
              habit={habit}
              isCompleteToday={isCompleteToday}
              handleCompleteHabit={handleCompleteHabit}
              handleEditHabit={handleEditHabit}
              handleRemoveHabit={handleRemoveHabit}
            />
          )
        )
        ) : (
          <h1 className="mt-10 text-2xl text-gray-300 font-semibold col-span-4 text-center">
            Los habitos que agregues se mostraran aca.
          </h1>
        )}
      </div>
    </section>
  );
}
