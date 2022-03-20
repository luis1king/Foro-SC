import { Box, HStack as Flex, Image, Text, VStack as HStack,Stack, Button } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom";


export default function DiscusionHeader() {
      
  let navigate = useNavigate();
  const navegarNuevaPregunta = () => {
    navigate('/nuevapregunta');
  }
  
  return (

    <Flex width="1672px" height="111px" bgColor='white'>
      <HStack width='50%' height='100%'>
        <Box w='61px' h='61px' bgColor='white' pos='absolute' left='125px'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
            alt='Angular'
            objectFit='cover'/>
        </Box>
        <Box w='353px' h='61px'  pos='absolute' left='190' top='90'>
        <Text fontSize='24px' fontWeight='bold'>Angular / General</Text>
        <Text fontSize='21px'>Dudas General</Text>
        </Box>
        <Flex w='131px' h='20px'  pos='relative' right='345px' top='80px'>
        <i className="bi bi-chat-left"></i>
        <Text fontSize='12px'>12k Preguntas</Text>
        </Flex>
      </HStack>
      
      <HStack width='50%' height='100%' justify={'center'} pos='relative'>

          <Stack direction='row' spacing={4} align='center' pos='absolute' right='0'>
      
              <Button  variant='solid' width='142px'>
              <i className="bi bi-person-dash"></i> Siguiendo
              </Button>
              <Button bgColor=' #32D5A4' variant='outline' onClick={navegarNuevaPregunta}>
              <i className="bi bi-plus"></i>  Añadir Pregunta
              </Button>
              <Button colorScheme='teal' variant='ghost'>
              <i className="bi bi-pin"></i>
              </Button>

            </Stack>
      </HStack>
    </Flex>




       
  )
}
