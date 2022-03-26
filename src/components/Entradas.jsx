import { Avatar, Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Entradas = () => {

    let navigate = useNavigate();
    const navegarPregunta = () => {
      navigate('/pregunta');
    }
    
  return (
    <>
         <Flex bgColor='white' borderRadius='12px' direction='row' width='1544px' height='71px'  mt='10px' align='center' position='relative'>
                <Box as='button' borderRadius='12px' width='54px' height='54px' bgColor='teal.50' align='center'>
                <i className="bi bi-hand-thumbs-up"></i><br/> <text fontSize='14px'>22</text>
                </Box>
                    <Flex w='1290px' h='71px' ml='15px' direction='column' as='button' onClick={navegarPregunta} >
                    <Spacer/>
                    <Text fontSize='16px' fontWeight='bold' fontFamily='Inter'>Título de la discusión MI PRIMER COMMIT</Text>
                    <HStack direction='row' >
                    <Text fontSize='13px' fontFamily='Raleway'> Publicado por Luis Huang hace 2 meses </Text>
                    </HStack>
                      </Flex>
                        <Flex w='160px' height='36px' bgColor='white' position='relative'>     
                          <Avatar
                            size='sm'
                            name='Kola Tioluwani'
                            src='https://bit.ly/tioluwani-kolawole'
                          />  
                          <Avatar
                            size='sm'
                            name='Kola Tioluwani'
                            src='https://bit.ly/code-beast'
                          />  
                          <Avatar
                            size='sm'
                            name='Kola Tioluwani'
                            src='https://bit.ly/tioluwani-kolawole'
                          />
                          <Spacer/>
                          <Box><i class="bi bi-chat-left"/> 22 </Box>
                        </Flex>
                </Flex>
    </>
  )
}
