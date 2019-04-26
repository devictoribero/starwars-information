import React from 'react';
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import {Box} from './Box'
afterEach(cleanup)

describe('-- Atom -- Box', () =>{
  it('Title is displayed correctly', () => {
    const {getByText} = render(<Box id='testid' url='/url-to-test'>something</Box>)
    expect(getByAttribute('href')).to()
  })

  it('Text is displayed correctly', () => {
    const textToCheck = 'she is cute'
    const {getByText} = render(<Box title='whatever' text={textToCheck}/>)
    expect(getByText(textToCheck)).toBeInTheDocument()
  })
})