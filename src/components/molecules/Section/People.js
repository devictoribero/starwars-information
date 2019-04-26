import React from 'react';
import {Box, BoxSkeleton} from '../../atoms/Box/Box'
import {Section} from './Section'
import {Grid} from '../../atoms/Grid/Grid'
import {useStarWarsApi} from '../../../hooks/useStarWarsApi'

export function People() {
  const data = useStarWarsApi({category: 'people'})
  return(
    <Section title='Characters'>
      <Grid>
      {data.length === 0 && renderBoxesSkeleton()}
        {data && renderData({data})}
      </Grid>
    </Section>
  )
}

function renderData({data}) {
  return data.map(({name, url}) =>
    <Box key={name} url={url}>
      <span style={{margin: 0, fontSize: '21px', fontWeight: 600}}>
        {name}
      </span>
    </Box>
  )
}

function renderBoxesSkeleton() {
  const arr = Array(7).fill(null)

  return arr.map((el, i) => <BoxSkeleton key={i}/>)
}