import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Descmain from './main/Descmain'
import './details.css'

function Details() {
    const {id} = useParams()
    const [details, setDetails] = useState(null)
    const movie = Descmain?.find((movie) => movie.id === parseInt(id)) // Find the movie by ID
    
        useEffect(() => {
            if(!movie){
          fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch((error) => console.error("Error fetching details:", error))}
            else{
                setDetails(movie)
            }
        }, [id])
      
    return (
      <div className="details-container">
      <div className="details-card">
        <img
          src={details?.image?.medium || "https://via.placeholder.com/210"}
          alt={details?.name}
          className="details-image"
        />
        <div className="details-info">
          <h1>{details?.name}</h1>
          <p>{details?.summary}</p>
          <p>
            <strong>Genres:</strong> <span className="genre">{details?.genres?.join(', ')}</span>
          </p>
          <p>
            <strong>Country:</strong> <span className="country">{details?.network?.country?.name}</span>
          </p>
          <p>
            <strong>Status:</strong> {details?.status}
          </p>
          
        </div>
      </div>
    </div>
    )
    }

export default Details