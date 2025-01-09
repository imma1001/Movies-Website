import {useState} from 'react'
import staron from '../../assets/icons/star.png'
import staroff from '../../assets/icons/white-star.png'

export default function Fav_star() {
    const [star, setStar] = useState({isFav:false})
    
    let checkstar = star.isFav?staron:staroff
    const toggleFavstar = ()=>{
        setStar(prev =>{
            return{
                ...prev,
                isFav: !prev.isFav
            }
        })
    }
  return (
    <img className ='star-style' onClick={toggleFavstar} src={checkstar}/>
  )
}
