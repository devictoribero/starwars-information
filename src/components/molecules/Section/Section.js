import React from 'react';
import './Section.css'

export function Section({title, children}) {
  return (
    <section className="Section">
      <header className="Section-header">
        <h1 className="Section-title">{title}</h1>
      </header>
      {children}
    </section>
  )
}