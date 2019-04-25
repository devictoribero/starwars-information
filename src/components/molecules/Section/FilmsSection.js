import React from 'react';
import {Card} from '../../atoms/Card/Card'
import {Section} from './Section'
import {Grid} from '../../atoms/Grid/Grid'
import {useStarWarsApi} from '../../../hooks/useStarWarsApi'

export function FilmsSection() {
  const films = useStarWarsApi({category: 'films'})

  if(!films) return null

  return(
    <Section title='Films'>
      <Grid>
        {films.map(({title, url}) =>
          <Card key={title} url={url}>
            <span style={{margin: 0, fontSize: '21px', fontWeight: 600}}>
              {title}
            </span>
          </Card>
        )}
      </Grid>
    </Section>
  )
}