import React from 'react'
import PropTypes from 'prop-types'
import './Box.css'

function LinkFactory({url, className, children}) {
  return url
    ? <a className={className} href={url}>{children}</a>
    : <div className={className}>{children}</div>
}

export function Box({url, children }) {
  return(
    <LinkFactory className='Box' url={url}>
      {children}
    </LinkFactory>
  )
}

Box.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  url : PropTypes.string,
}

export function BoxSkeleton() {
  return <div className='Box'></div>
}