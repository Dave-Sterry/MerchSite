import React from 'react';
import Header from './Header';
import Control from './Control';
import {Container} from "react-bootstrap";


function App() {
  return(
    <React.Fragment>
      <Container>
        <Header />
        <Control />
      </Container>
    </React.Fragment>
  );
}

export default App;
