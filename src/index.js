import React from 'react';
import ReactDOM from 'react-dom';
import ForumApp from './ForumApp';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider>
    <ForumApp />
    </ChakraProvider>,
  document.getElementById('root')
);

