import React from 'react'
import PropTypes from 'prop-types'
import './Grid.css'

export function Grid({children}){
  return(
    <div className='Grid'>
      {children}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}