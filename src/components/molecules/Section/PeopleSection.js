import React from 'react';
import {Card} from '../../atoms/Card/Card'
import {Section} from './Section'
import {Grid} from '../../atoms/Grid/Grid'
import {useStarWarsApi} from '../../../hooks/useStarWarsApi'

export function PeopleSection() {
  const data = useStarWarsApi({category: 'people'})

  if(!data) return null

  return(
    <Section title='Characters'>
      <Grid>
        {data.map(({name, url}) =>
          <Card key={name} title={name} url={url}/>
        )}
      </Grid>
    </Section>
  )
}