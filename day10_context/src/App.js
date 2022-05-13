import React from 'react';
import Count from './components/color/Count';
import Color from './components/count/Color';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';

const App = () => {
  return (
    <div>
      <CountProvider>
          <Count />
      </CountProvider>

      <hr />
      <ColorProvider>
        <Color />
      </ColorProvider>
    </div>
  );
};

export default App;