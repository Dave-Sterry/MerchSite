import React from 'react';
import teddyBear from "./../img/bigbear.png";
import {Container, Row, Col} from "react-bootstrap";

function Header(){
  const headerStyles= {

  }
  return(
    <React.Fragment>
      <Container>
        <div style={headerStyles}>
          <Row>
            <Col>
              <h1>Joe's Big Stuffed Animals</h1>
              <h3>No it's not too big, and no I'm not too old</h3>
            </Col>
            <Col>
              <img src={teddyBear} alt="Picture of a really big teddy bear and kid with dead eyes" width='250px'/>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Header;