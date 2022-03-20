import { Badge, Button, Container, Flex, Box, Spacer, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

export const RespuestaCard = () => {
  return (

    <Box direction='column' w='100%' borderRadius='12px' padding='24px 12px' gap='24px' mt='10px' >
        <Flex direction='column'>
        
        {/* Header */}
            <Flex direction='row' h='40px' gap='10px'>
                <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />{' '}
                <Box direction='column'>
                    <Text>Usuario</Text>
                <Text>Publicado hace 3 días</Text>
                </Box>
            </Flex>

             {/* Cuerpo de la tarjeta */}
            <Flex bgColor='white' mt='20px'> 
            <Text fontSize='16px' maxW='1528px' fontWeight='400' fontFamily='Inter' lineBreakMode=''>
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
        </Flex>

        </Flex>
              {/* Action buttons */}

        <Flex direction="row" gap='12px' mt='15px'>
            <Button w='92px' h='42px' borderRadius='42PX' 
            bgColor='#32D5A4' variant='solid' color='white' 
            leftIcon={<i className="bi bi-hand-thumbs-up-fill"/>}>
            123</Button>
            <Button w='92px' h='42px'  colorScheme='red' 
            variant='outline' borderRadius='42px' 
            leftIcon={<i className="bi bi-hand-thumbs-down"></i>}>
            123</Button>
        </Flex>

    </Box>
  )
}
