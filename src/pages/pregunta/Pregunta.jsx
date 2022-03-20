import { Box, Button, Container, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { EscribirRespuesta } from '../../components/EscribirRespuesta'
import { HeaderButton } from '../../components/HeaderButton'
import { PreguntaCard } from '../../components/PreguntaCard'
import { RespuestaCard } from '../../components/RespuestaCard'



export const Pregunta = () => {
  return (
    <Box width='100%' h='100%' direction='column' alignItems='center'>
     
        <Flex width='100%' height='80px' padding='20px'>
      <HeaderButton/>
        </Flex>

        <Container maxW='1740px' justify='center' position='relative' boxSizing='border-box'>
          <Box width='100%' height='100%' mt='20px' direction='column'>
            <PreguntaCard/>
            <Box direction='column' mt='20px'>
            <Flex maxW='98%' height='50px' bgColor='white'>
                <Text fontSize='18px' fontWeight='bold'>4 respuestas</Text> 
                <Spacer/> 
              <Menu>
                <MenuButton as={Button} rightIcon={<i className="bi bi-sort-down"></i>}>
                  Ordenar por
                </MenuButton>
                    <MenuList>
                      <MenuItem>Orden Alfabético</MenuItem>
                      <MenuItem>Nuemero de votos</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
           <RespuestaCard/>
           <EscribirRespuesta></EscribirRespuesta>
            </Box>


          </Box>


        </Container>

     



    </Box>
  )
}
