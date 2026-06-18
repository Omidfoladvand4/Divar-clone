import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
const HomeWrapper = styled.div`
 position: relative;
 width: 100vw;
`

function Home() {
  const params = useParams()
  
  useEffect(() => {
 const  cityArray =  params.City.split(',')
   console.log(cityArray);
   
    
  } , [params])
  return (
    <HomeWrapper>
      
    </HomeWrapper>
  )
}

export default Home