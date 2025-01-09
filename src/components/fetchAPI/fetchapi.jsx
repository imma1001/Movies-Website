import useFetchShows from './../Shared/FetchFunc' 
import '../main/main.css'
import './api.css'
import Card from "../main/Card"
import Scrollbutton from '../Shared/Scrollbutton'

function TVmazeMovies() {
  const { shows, error } = useFetchShows()
 
    if (error) {
      return <p>Error: {error}</p>
    }

  const ShowFunc = shows.map((show) => {
    return(
        <Card
          id={show.id}
          name={show.name}
          image={show.image?.medium}
          type={show.genres?.join(", ")}
          summary={show.summary}
          country={show.network?.country?.name}
          />
    )})

    return (
        <div className="section-wrapper">
          <div className="section-header">
            <h3>Favourite TV Shows</h3>
          </div>
          <div className="fav-items">
         {ShowFunc}
            <Scrollbutton/>
          </div>
          </div>
      )
                }

export default TVmazeMovies;
