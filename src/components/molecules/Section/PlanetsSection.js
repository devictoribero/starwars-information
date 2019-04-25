import React from 'react';
import {Card} from '../../atoms/Card/Card'
import {Section} from './Section'
import {Grid} from '../../atoms/Grid/Grid'
import {useStarWarsApi} from '../../../hooks/useStarWarsApi'

export function PlanetsSection() {
  const planets = useStarWarsApi({category: 'planets'})

  if(!planets) return null

  return(
    <Section title='Planets'>
      <Grid>
        {planets.map(({name, url}) =>
          <Card key={name} title={name} url={url}/>
        )}
      </Grid>
    </Section>
  )
}