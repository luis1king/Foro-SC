import React from 'react'
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import img from '../../images/REVOLUCIONA.jpg';
import { useNavigate } from "react-router-dom";
import logo from '../../images/Logo.jpg'

export const Login = () => {

  //Para navegar a la pag de registro con el boton
  let navigate = useNavigate();
  const handleRegister = () => {
    navigate('/register')
  }

  
  return (
    <Stack  backgroundColor= {"black"} color={"white"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

      <Flex p={12} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={4} w={'full'} maxW={'md'} marginLeft={10}>           <Image
          alt={'Logo'}
          objectFit={'cover'}
          src={logo}/>

          <FormControl id="email">
            <FormLabel>Email </FormLabel>
            <Input marginLeft="30px" color="black" bgColor="white" type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña</FormLabel>
            <Input  marginLeft="30px" color="black" bgColor="white" type="password" />
          </FormControl>

          <Stack spacing={6}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'} justifyContent={"space-between"}>
                  <Checkbox colorScheme='green'>Recuérdame</Checkbox>
                  <Link fontSize='14' color={'green.200'}>¿Has olvidado la contraseña?</Link>
                </Stack>

                <Stack direction={{ base: 'column', sm: 'row' }}
                  align={'start'}>
                <Button fontSize='s' size='lg' width="50%" color="black" bgColor="#32D5A4" variant={'solid'}>
                  Iniciar sesión
                </Button>
                <Button fontSize='s' 
                size='lg' onClick={handleRegister} width="50%" color="black" bgColor="#32D5A4" variant={'solid'}>
                Registrarse
                </Button>
                </Stack>
          </Stack>

       
          <Stack fontSize='10'  >
            <p >Copyright © 2022 Open Bootcamp SL, Imagina Group<br/>
             Todos los derechos reservados.</p>
             <Link as='u' fontSize='10' href="https://open-bootcamp.com/politica-privacidad">Política de Privacidad</Link>
          </Stack>
        </Stack>  

      </Flex>


      <Flex  bgColor='red' bgImage={img}  flex={5}>
      </Flex>

    </Stack>
  )
}
