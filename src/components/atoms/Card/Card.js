import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

function LinkFactory({url, className, children}) {
  if (!url) {
    return children
  }

  return <a href={url} className={className}>{children}</a>
}
export function Card({ title, text, url }) {
  return(
    <LinkFactory className='Card' url={url}>
      <header>
        <h1 className="Card-title">{title}</h1>
      </header>
      {text && <div>{text}</div>}
    </LinkFactory>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url : PropTypes.string,
}