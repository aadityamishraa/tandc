import React from 'react';
import logoImg from '../../assests/logo.png';
import '../../App.css';
import './logo.css'

const Logo = () => {
  return (
    <div className='container'>
      <img width={100} height={40} src={logoImg} alt='logoImage' className='logo' />
      <h1>Summarizer</h1>
    </div>
  )
}

export default Logo;
