import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { Entradas } from './Entradas'

export const PanelPreguntas = () => {
  return (
    <>

    <Tabs>
    <TabList>
      <Tab><Text>En Tendencia</Text></Tab>
      <Tab>Más Recientes</Tab>
    </TabList>
  
    <TabPanels>
    
      <TabPanel>
       <Entradas/>
       <Entradas/>
      </TabPanel>

      <TabPanel>
        <Entradas/>
      </TabPanel>
     
    </TabPanels>
  </Tabs>

  </>
  )
}
