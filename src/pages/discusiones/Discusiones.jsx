import { Avatar, Box, Container, Flex , Flex as HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import DiscusionHeader from '../../components/DiscusionHeader'
import { Entradas } from '../../components/Entradas'
import { HeaderButton } from '../../components/HeaderButton'
import { PanelPreguntas } from '../../components/PanelPreguntas'
import '../../styles/discusiones.css'

export const Discusiones = () => {
 return (

  <div className="principalDiscusiones">

        <header className="cabeceroDiscusiones">
          <HStack spacing='500px' w='1920px'>
          <HeaderButton/>
          </HStack>
          <HStack  mt='20px' justify={'center'}>
          <DiscusionHeader/>
          </HStack>
        </header>

  {/* -----------------------------BODY------------------------------------------- */}

     <div className="discusionesBody">
        <div className="discusionesMain">
            <HStack width='1592px'  direction='column' height='430px' bgColor='' >
              <HStack width='1592px' height='20px' bg='white'>
              <Text fontSize='18px' fontWeight='bold' fontFamily='Inter'> Discusiones Fijadas</Text>
              </HStack>
              <HStack width='1592px' height='400px' mt='10px' direction='column' alignItems='center' overflow='scroll'>
                <Entradas/>
                  <Entradas/>
                  <Entradas/>
                  <Entradas/>
                  <Entradas/>
              </HStack>
            </HStack>

            <HStack width='1592px' height='380px' mt='20px'>
              <Box   >
              <PanelPreguntas/>
              </Box>
            </HStack>
      
        </div>
     </div>

  </div>
  )
}
