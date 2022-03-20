import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Flex, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

export const EscribirRespuesta = () => {
  return (
      <Flex mt='20px'  width='100%' align='center'>

    <Accordion allowToggle width='100%'  >
        <AccordionItem>
            <Flex direction='row' h='40px' gap='10px' >
            <AccordionButton>
                <Avatar width='40px' height='40px' name='Ryan Florence' src='https://bit.ly/ryan-florence' />{' '}
                <Box direction='column' ml='20px'>
                    <Text>Escribe tu respuesta</Text>
                </Box>
            </AccordionButton>
            </Flex>
            <AccordionPanel pb={4}>
            
                <Textarea isInvalid placeholder='Escribe tu respuesta' width='100%'></Textarea>
                   {/* Action buttons */}

        <Flex direction="row" gap='12px' mt='15px'>
            <Button w='100px' h='42px'  colorScheme='black' 
            variant='outline' borderRadius='10px' 
            >
            Cancelar</Button>
            <Button w='183px' h='42px' borderRadius='10px' 
            bgColor='#32D5A4' variant='solid' color='white' 
            leftIcon={<i className="bi bi-send-fill"></i>}>
            Subir respuesta</Button>
        </Flex>
            </AccordionPanel>
        </AccordionItem>

</Accordion>
      </Flex>
  
  )
}
