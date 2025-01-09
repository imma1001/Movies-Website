import {useState} from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import m from './../main/Descmain'
import Search from '../search/search'

function Header() {
  const [movies, setFilteredMovies] = useState(null)

    return (
   <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">   <img src="clapperboard.png" style={{padding: "5px", width: "80px"}}/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link active" to="/shows">
              Shows
            </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Who Are You
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item"  to="/register">Register </Link></li>
                <li><Link class="dropdown-item"  to="/login">Login </Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="/yourList">Make your List</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/yourList" tabindex="-1" aria-disabled="true">Make Your List </Link>
            </li>
          </ul>
          <div >
          <Search m={m} setFilteredMovies={setFilteredMovies}></Search>
          {movies=== null ? null :movies.length > 0 ? (
          <ul className="list-group">
         {movies.map((movie,index) => (
          <li key={index} className="list-group-item">
              {movie.name} 
          </li>
        ))}
      </ul>
      ):"No Movie is Found"
      }
      </div>          
        </div>
      </div>
    </nav>
   
    </>
  )
}

export default Header