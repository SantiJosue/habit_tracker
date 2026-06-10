import { useEffect, useState } from "react"
import { getHabits } from "../services/habitService"

export default function Habits() {
  const [habits, setHabits] = useState([])

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const data = await getHabits()
        setHabits(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchHabits()
  }, [])
  console.log(habits);

  return (
    <section>
      <h1>Gestiona tus habitos:</h1>
      <div>
        {habits.length > 0 ? (
          habits.map(habit => (
            <ul key={habit._id}>
              <li>{habit.name}</li>
              <li>{habit.frequency}</li>
            </ul>
          ))
        ) : (
          <h1>Los habitos que agregues se mostraran aca.</h1>
        )}
      </div>
    </section>
  )
}
