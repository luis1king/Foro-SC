import React, { useEffect, useState } from 'react'
import  '../../styles/temas.css'
import logoHeader from '../../images/Logo 2.jpg'
import { Avatar, Badge, Box, Button, Container, Flex as div, Grid, GridItem, HStack, IconButton, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, SimpleGrid, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ForoHeader } from '../../components/ForoHeader'
import axios, { Axios } from 'axios'
import Examcard from '../../components/ExamCard'
import MainCard1 from '../../components/MainCard1'
import SecondCard from '../../components/SecondCard'
import ThirdCard from '../../components/ThirCard'
import Header from '../../components/Header'

export const Temas = () => {
  

  
 
  return (
    
    <div className="principal">
      <header>
      <div className="logoHeader">
     <div>

      <img src={logoHeader} alt="logoHeader"/>
    </div>
    </div>
     <Header/>
        </header>
            
            <div className="main">
          <aside>
              <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Temas
          </MenuButton>
          <MenuList>
            <MenuItem minH='48px'>
              <Image
                boxSize='2rem'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
                alt='Angular'
                mr='12px'
              />
              <span>Angular</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>React JS</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://seeklogo.com/images/S/spring-logo-9A2BC78AAF-seeklogo.com.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Spring</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Javascript</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                src='http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Git</span>
            </MenuItem>
            <MenuItem minH='40px'>
              <Image
                boxSize='2rem'
                src='https://img2.freepng.es/20190205/ih/kisspng-microsoft-azure-cloud-computing-google-cloud-platf-5c597050ea5026.4420876915493653289598.jpg'
                alt='Simon the pensive'
                mr='12px'
              />
              <span>Azure</span>
            </MenuItem>
          </MenuList>
        </Menu>
            </aside>

      <section>
       <div className="cabecero">

            <div className="fixedBar"/>
            
            <div className="logoTema"><Image
                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
                alt='Simon the pensive'
                objectFit='cover'
              />
              </div>
            

            <div className="sectionHeader">  
            <span className="headerTitle">ANGULAR</span>
                          <div className="input2Container">
          <i className="bi bi-search"></i> <input type="text" placeholder="Buscar temas" className="input2"></input>
          <div className="desplegable">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} leftIcon={<i className="bi bi-sort-down"></i>}>
                Ordenar por
              </MenuButton>
                <MenuList>
                <MenuItem minH='48px'>
                  <span>Angular</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <span>React JS</span>
                </MenuItem>
                <MenuItem minH='40px'>
                  <span>Spring</span>
                </MenuItem>
                <MenuItem minH='40px'>
                <span>Javascript</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Git</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Azure</span>
              </MenuItem>
            </MenuList>
           </Menu>
            </div>
          </div>
          </div>

        
           <div className="temas">
           
           
           <div className="row row-cols-1 row-cols-md-5 g-4">
            <MainCard1/>
            <SecondCard/>
            <ThirdCard/>
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />
              <Examcard />

            </div>



    

           </div>
        </div>

      </section>

        </div>


  </div>

  )
}