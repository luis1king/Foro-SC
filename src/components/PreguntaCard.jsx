import { Badge, Flex as Container, Flex, Text, Spacer, Button } from '@chakra-ui/react'
import React from 'react'


export const PreguntaCard = () => {
  return (
    <Container direction='column' w='100%' borderRadius='12px' padding='24px 12px' gap='24px'>
    
    {/* Cabecero de la tarjeta */}
        <Container direction='column'>
            <Flex direction='row'>
                <Badge variant='solid' colorScheme='green'>
                <Text fontSize='13px' fontFamily='Inter' fontWeight='700' color=''>Angular/General </Text> 
                </Badge>
            </Flex>
            <Flex width='100%'>
                <Text fontSize='28px' fontFamily='Inter' fontWeight='600'>Título de la pregunta</Text>
                <Spacer/>  
                <Button  leftIcon={<i className="bi bi-person-plus"/>} colorScheme='teal' size='xs'>
                Seguir pregunta
                </Button>
            </Flex>
            <Flex>
                <Text fontSize='13px'>Subido por @Luis Huang hace 4 días</Text>
            </Flex>
        </Container>

        {/* Cuerpo de la tarjeta */}
        <Container> 
            <Text fontSize='16px' maxW='1528px' fontWeight='400' fontFamily='Inter'>
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            Hola,Lorem ipsum dolor sit amet, consecteturLoremI,
            </Text>
        </Container>

        {/* Action buttons */}
        <Flex direction="row" gap='12px'>
            <Button w='92px' h='42px' borderRadius='42PX' 
            bgColor='#32D5A4' variant='solid' color='white' 
            leftIcon={<i className="bi bi-hand-thumbs-up-fill"/>}>
            123</Button>
            <Button w='92px' h='42px'  colorScheme='red' 
            variant='outline' borderRadius='42px' 
            leftIcon={<i className="bi bi-hand-thumbs-down"></i>}>
            123</Button>
            <Button w='146px' h='42px'  colorScheme='black' 
            variant='outline' borderRadius='10px' 
            leftIcon={<i class="bi bi-chat-left-text"></i>}>
            Responder</Button>
        </Flex>

</Container>
  )
}
