import React from 'react'
import './style.css'

export default function Scrollbutton() {
 
    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
  return (
    
    <button className='button-scroll'
    onClick={scrollToTop}
    >
      ↑
    </button>
  )
}
