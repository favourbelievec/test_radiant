import React from 'react'

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em'
  }
  return (
    <h1 style={{
      fontSize: '6rem',
      fontWeight: '600',
      marginBottom: '2rem',
      lineHeight: '1em',
      color: '#egegeg',
      textTransform: 'capitalize',
      textAlign: 'center'
    }}>Torilo Student Mgt App</h1>
  )
}

export default Header