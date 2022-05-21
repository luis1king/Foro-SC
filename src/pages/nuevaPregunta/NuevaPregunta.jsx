import { Box, Button, Container, Flex, Input, Select, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { HeaderButton } from '../../components/HeaderButton'


export const NuevaPregunta = () => {
  return (
    <Box width='100%' h='100%' direction='column' alignItems='center' overflowX='hidden' >
     
    <Flex width='100%' height='80px' padding='20px'>
  <HeaderButton/>
    </Flex>
    <Container maxW='1672px' justify='center' position='relative' boxSizing='border-box' mt='70px'>
     <Flex>
       <Text fontSize='24px' fontWeight='700' fontFamily='Inter'>Escribe tu pregunta sobre General de Angular </Text>
     </Flex>
     <Box maxW='1532px' mt='24px' direction='column'  >
       <Flex width='100%' direction='row' maxHeight='50px' align='center'  marginBottom='24px'>
        <Box width='197px'>
          <Text fontSize='16px'fontWeight='600' fontFamily='Inter'>Título pregunta</Text>
        </Box>
          <Input placeholder='Escribe un título para tu pregunta' width='1335px'></Input>
       </Flex> 

       <Flex width='100%' direction='row' maxHeight='50px' align='center' marginBottom='50px'>
        <Box width='197px'>
          <Text fontSize='16px'fontWeight='600' fontFamily='Inter'>Categoría</Text>
        </Box>
          <Box width='100%'>
           <Select placeholder='Seleciona una categoría'>
            <option value='option1'>Ayuda</option>
            <option value='option2'>Anuncio</option>
            <option value='option3'>Sugerencia</option>
            <option value='option1'>Proyectos</option>
            <option value='option2'>Errores</option>
          </Select>
          </Box>
       </Flex> 
       <Flex width='100%' direction='row' align='center' marginBottom='24px'>
        <Box width='197px'>
          <Text fontSize='16px'fontWeight='600' fontFamily='Inter'>Contenido</Text>
        </Box>
          <Box width='100%'>
          <Textarea placeholder='Escribe una descripción para tu pregunta' />
          </Box>
       </Flex>
       <Flex marginLeft='170px'>
         <Button colorScheme='teal' bgColor=' #32D5A4' size='md' width='144px' height='42px' color='white' borderRadius='10px'>
          Subir pregunta
          </Button>
       </Flex> 

     </Box>
    </Container>
</Box>
  )
}
