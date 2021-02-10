import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemsAll(props){
  return(
    <React.Fragment>
      <hr/>
      {props.itemList.map((item, index) =>
      <Item name={item.name}
        description={item.description}
        quantity={item.quantity}
        key={index}/>
      )}
    </React.Fragment>
  );
}

ItemsAll.propTypes ={
  itemsList: PropTypes.array
};

export default ItemsAll;