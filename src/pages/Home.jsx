import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
const HomeWrapper = styled.div`
 position: relative;
 width: 100vw;
`

function Home() {
  const params = useParams()
  const [cityArray , setCityArry] = useState('iran')
  useEffect(() => {
    setCityArry(() => params.City.split(' , '))
    console.log(cityArray);
   
    
  } , [params])
  return (
    <HomeWrapper>
    </HomeWrapper>
  )
}

export default Home