import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/authAction';


export const Login = () => {

  const dispatch = useDispatch();

  //Para navegar a la pag de registro con el boton
  let navigate = useNavigate();
  const handleRegister = () => {
    navigate('/auth/register')
  }

  const [state, setState] = useState({
    email:'lsl@glg.com',
    password:'123546'
  })
 
  //Cambiamos estado del boton al hacer click
  const [loading, setloading] = useState(false)
  const click =()=>{
    setloading(true)
  }

  const handleChange =(e)=>{
    setState( {...state,[e.target.name]:e.target.value})
   }
  //Nuevo estado, poruqe con el handle hange modificamos el valor del input
   const {email, password} = state;

    const handleLogin= (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email,password))//inicio de sesion
    click()
  }
  
  return (
    <Stack  backgroundColor= {"black"} color={"white"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

      <Flex p={12} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={4} w={'full'} maxW={'md'} marginLeft={10}>           
        <Image
          alt={'Logo'}
          objectFit={'cover'}
          src={logo}/>

          <form onSubmit={handleLogin}>
          <FormControl id="email">
            <FormLabel>Email </FormLabel>
            <Input color="black" bgColor="white" type="email" value={state.email} name='email' onChange={handleChange}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña</FormLabel>
            <Input   color="black" bgColor="white" type="password" value={state.password} name='password' onChange={handleChange}/>
          </FormControl>

          <Stack spacing={6}>
                <Stack 
                  mt='12px'
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'} justifyContent={"space-between"}>
                  <Checkbox colorScheme='green'>Recuérdame</Checkbox>
                  <Link fontSize='12' color={'green.200'}>¿Has olvidado la contraseña?</Link>
                </Stack>

                <Stack direction={{ base: 'column', sm: 'row' }}
                  align={'start'}>
                <Button type='submit' fontSize='s' size='lg' width="50%" color="black" bgColor="#32D5A4" variant={'solid'}  isLoading={loading}>
                  Iniciar sesión
                </Button>
                <Button fontSize='s' 
                size='lg' onClick={handleRegister} width="50%" color="black" bgColor="#32D5A4" variant={'solid'}>
                Registrarse
                </Button>
                </Stack>
          </Stack>
          </form>

       
          <Stack fontSize='10' mt='2000px' >
            <p >Copyright © 2022 Open Bootcamp SL, Imagina Group<br/>
             Todos los derechos reservados.</p>
             <Link as='u' fontSize='10' href="https://open-bootcamp.com/politica-privacidad">Política de Privacidad</Link>
          </Stack>
        </Stack>  

      </Flex>


      <Flex  objectFit={'cover'} bgImage={img}  flex={5}>
      </Flex>

    </Stack>
  )
}
