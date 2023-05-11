import PropTypes from 'prop-types'
import React from 'react'

export const GifCard = ({ title, url }) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  )
}

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}