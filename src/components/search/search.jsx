import {useState,useEffect} from 'react'
import { useLocation } from "react-router-dom"

function Search(props) {
    const { m, setFilteredMovies } =props
    const [searchQuery, setSearchQuery] = useState("")
    const location = useLocation() // Get current route location

  useEffect(() => {
    // Clear filtered movies when route changes
    setFilteredMovies(null)
  }, [location])
  
  const handleSearch = (e) => {
    e.preventDefault()

    //filter for more 2 char
    if
    (searchQuery.trim().length<3){
        setFilteredMovies([]);  // Clear previous results if input is invalid
        return
    }
    
    const filtered = m.filter((movie) =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredMovies(filtered)
  }
  
  return (
    <header>
        <form onSubmit={handleSearch} class="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
         value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="btn btn-outline-info" disabled={searchQuery.trim().length < 3} type="submit">Search</button>
        </form>
  </header>
  )
}

export default Search