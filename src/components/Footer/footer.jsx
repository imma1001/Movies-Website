import React from 'react'

export default function Footer() {
  return (

  <div className='text-center p-5' style={{ backgroundColor: 'rgb(42, 42, 42)',position:'absolute',width:"100%"}}>
    &copy; {new Date().getFullYear()} Copyright:{' '}
    <a className='text-light' href='#'>
      ourWebsite.com
    </a>
  </div>
  
  )
}
