import React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import {Card} from './Card'
afterEach(cleanup)

describe('-- Atom -- Card', () =>{
  it('Title is displayed correctly', () => {
    const textToCheck = 'mini'
    const {getByText} = render(<Card title={textToCheck} text={'whatever'}/>)
    expect(getByText(textToCheck)).toBeInTheDocument()
  })

  it('Text is displayed correctly', () => {
    const textToCheck = 'she is cute'
    const {getByText} = render(<Card title='whatever' text={textToCheck}/>)
    expect(getByText(textToCheck)).toBeInTheDocument()
  })
})