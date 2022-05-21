import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  Container,
  Checkbox,
  Image,
  
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import {  Form, Formik } from 'formik';
import * as Yup from 'yup';
import { InputControl } from 'formik-chakra-ui';
import logo from '../../images/OB-logo.jpg'
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/authAction';

export const Register = () => {

  const initialValues = {
    firstName: "Luis",
    lastName: "Huang ",
    email:'lslas@gmail.com',
    password:'123456',
    password2:'123456',
  }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
      .required('El nombre es requerido'),
    lastName: Yup.string()
      .min(2, 'Demasiado corto')
      .max(50, 'Demasiado largo')
      .required('Required'),
    email: Yup.string().email('Email invalido').required('El email es requerido'),
    password: Yup.string().required("La contraseña es requerida")
              .min(6,'La contraseña debe tener más de 6 caracteres'), 
    //Para la confirmacion de las contraseñas
    password2: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "La contraseña no coincide")})
  });

  let navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login')
  }
//Con este hook de redux llamamos a la accion que queremos ultilizar
const dispatch= useDispatch()

  return (
    <Formik
    initialValues={initialValues}
     validationSchema={SignupSchema}
     onSubmit={async ({firstName,lastName,password,email}) => {
        
        await new Promise((r) => setTimeout(r, 1000));
      //Aqui usamos el dispatch para llamar la accion de registro de usuario
       dispatch(startRegister(email,password,firstName,lastName));
       
      }}
    >
    {({handleSubmit,values,errors,handleChange}) => {
     
     return(
       <Form onSubmit={handleSubmit}>
      <Box backgroundColor='black'>
      <Container >
    <Flex bgColor='black'
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    color='white'
  
   >
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'} >
        <Box width='60px' height='60px'>
          <Image src={logo}/>
        </Box>
        <Heading fontSize={'4xl'} textAlign={'center'}>
         Registro
        </Heading>
        <Text fontSize={'lg'} color='white'>
        ¡Bienvenido/a! Vamos a crear tu perfil ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        backgroundColor='black'
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          
          <HStack>
            <Box>  
             {/*InputCoontrol, equivale a Field de Formik, y esta importado de la libreria formik-chakra-ui  */}
                <FormLabel>Nombre</FormLabel>
                <InputControl type="text" name="firstName"  />
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Apellidos</FormLabel>
                <InputControl name="lastName" type="text" />
              </FormControl>
            </Box>
          </HStack>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <InputControl name='email' type="
            email" />
          </FormControl>


          {/* al usar un input diferente al que trae por defecto Formik, tenemos que usar la propiedad value
          Ademas para la confirmacion del error se usa el span ClassName error, para poder mostrar el mensaje */}
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
              <Input type='password' name='password' onChange={handleChange} value={values.password} />
              <span className="error" style={{ color: "red" }}>
              {errors.password}
            </span>
          </FormControl>

          <FormControl id="password2" isRequired>
            <FormLabel>Repetir contraseña</FormLabel>
              <Input type='password' onChange={handleChange} name="password2" value={values.password2}/>
              <span className="error" style={{ color: "red" }}>
              {errors.password2}
            </span>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Privacidad</FormLabel>
            <Checkbox>Acepto la politica de privacidad</Checkbox>
          </FormControl>
         
          <Stack spacing={10} pt={2}>
            <Button
              type='submit'
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Registrarse
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              ¿Ya estás registrado? <Link onClick={handleLogin} color={'blue.400'}>Iniciar Sesión</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>  
   </Container>
    </Box>
    </Form>
     )


    } 
    }

  
    
    </Formik>
   
   
  )
}



