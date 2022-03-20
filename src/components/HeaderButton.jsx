import { Box} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'


export const HeaderButton = () => {

  const navigate = useNavigate();
  

  return (
      <>
    <Box  width='500px' >
        {/* navigate to last path */}
        <Box onClick={() => navigate(-1)} as='button' type='whiteAlpha' borderRadius='md' justifyContent='center' align='center' bg='#ffe1e1' color='black' px={4} h={8}>
        <i className="bi bi-arrow-left"/> Volver
        </Box>
        </Box>
          <Box width="50%"  position='relative'>
            <Header/>
      </Box>

      </>
  )
}
