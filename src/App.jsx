import { useEffect, useState } from "react"
import Loading from "./components/loading"
import Tours from "./components/tours"

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.error(error)  
    }
  }

  const removeTour = (id) => setTours(tours.filter((tour) => tour.id !== id))
  

  useEffect(() => {
    fetchTours()
  },[])

  if (loading) {
    return(
      <div className="main-container">
        <Loading />
      </div>
    )
  }

  return(
    <div className="main-container">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
  

}

export default App
