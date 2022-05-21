import { ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/authAction';

const Header = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
      dispatch(startLogout())
    }

    return (
        <div className="inputHeader">
        <input type="text"
        className="input1"
         placeholder="Buscar"/>
         <div className="avatar">
            <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar
                        size={'sm'}
                        src={""
                        }
                      />
                      <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">Luis Huang</Text>
                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                      <ChevronDownIcon/>
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue('white', 'gray.900')}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <Button as='MenuItem' spacing='24px' leftIcon={<i className="bi bi-gear"></i>}>  <p>Configuración</p> </Button>
                    <MenuDivider />
                    <Button as='MenuItem' onClick={handleLogout} leftIcon={<i className="bi bi-box-arrow-left"></i> }> Cerrar Sesión</Button>
                  </MenuList>
                </Menu>
            </div>
          </div>
    );
}

export default Header;
