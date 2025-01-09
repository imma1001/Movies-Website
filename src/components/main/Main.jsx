import React from 'react'
import "./main.css"
import Card from './Card'
import Descmain from './Descmain';
import Scrollbutton from '../Shared/Scrollbutton';


function Main() {
    const entryelement = Descmain.map((entry)=>{
        return(
          <Card
          id={entry.id}
          name={entry.name}
          image={entry.image}
          summary={entry.summary}
          type={entry.type}
          country={entry.country}
          />
        )
      })
  return (
    <>
        <div class="main"><em>Welcome To Our Website</em>
    <div class="title"> <em>Browse</em> The Most Populer Movies Here</div>
    </div>
     <div className='section-wrapper'>
    <div className='section-header'> 
        <h3>Favourite Movies</h3>
        </div>
        <div className='fav-items'>
       {entryelement}
        <Scrollbutton/>
    </div>
    </div>
    </>
  )
}

export default Main