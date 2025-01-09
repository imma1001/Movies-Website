import {useState} from 'react'
import Fav_star from '../Shared/Fav-star'
import { Link } from 'react-router-dom'

export default function Card(props) {
    var { id ,image , summary , name , type, country,  checkstar, toggleFavstar } = props
    const[isShown,setIsshown] = useState(false)
    function toggleShow(){
      setIsshown(prevshow => !prevshow)
    }
  return (
   
                <div className='card-wrapper'>
                  <div className='item-content'>
                    <Link to={`/details/${id}`}>
                    <img className='img-card' src={image}/> </Link> <br/>
                    <Fav_star toggleFavstar={toggleFavstar} checkstar={checkstar}/>
                      <h4 className='item-title'>
                            {name} <br/>
                            <span>Country:{country}</span> <br/>
                            <span>Type:{type}</span> <br/>
                            {
                            isShown&&<span>
                            {summary}
                            </span>
                            }
                              <button className="btn btn-outline-info"onClick={toggleShow}>{isShown?"Hide":"Show"} Description</button>
                        </h4>
                    </div>
                   
                </div>
           
  )
}
