import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

function ItemsAll(props){

  function _createItemList() {
    let rows = {};
    let counter = 1;
    props.itemList.forEach((item, index) => {
      rows[counter] = rows[counter] ? [...rows[counter]] : [];
      if(index % 4 === 0 && index !== 0){
        counter++;
        rows[counter] = rows[counter] ? [...rows[counter]] : [];
        rows[counter].push(item);
      } else {
        rows[counter].push(item);
      }
    });
    return rows;
  }
  let rows = _createItemList();

  const rowStyles = {
    fontFamily: 'comic sans',
    paddingTop: '10px',
    paddingBottom:'10px',
  };

  return(
    <React.Fragment>
      {/* <Container> */}
        {Object.keys(rows).map(row => {
          return(
            <Row className = "items_row" key={row} style={rowStyles} xl={4} lg={4} md={4} sm={2} xs={2}>
              {rows[row].map(item => {
                return(
                  <Col><Item whenItemClicked = {props.onItemSelection}
                  name={item.name}
                  description={item.description}
                  quantity={parseInt(item.quantity)}
                  id={item.id}
                  key={item.id}/>
                  </Col>
                  )
              })}
            </Row>
          )
        })}
      {/* </Container> */}
    </React.Fragment>
  );
}

ItemsAll.propTypes ={
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemsAll;


/* <hr/>
{props.itemList.map((item) =>
<Item whenItemClicked = {props.onItemSelection}
  name={item.name}
  description={item.description}
  quantity={parseInt(item.quantity)}
  id={item.id}
  key={item.id}/>
)} */