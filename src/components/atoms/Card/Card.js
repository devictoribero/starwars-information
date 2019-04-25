import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

function LinkFactory({url, className, children}) {
  return url
    ? <a className={className} href={url}>{children}</a>
    : <div className={className}>{children}</div>
}

export function Card({url, children }) {
  return(
    <LinkFactory className='Card' url={url}>
      {children}
    </LinkFactory>
  )
}

Card.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  url : PropTypes.string,
}