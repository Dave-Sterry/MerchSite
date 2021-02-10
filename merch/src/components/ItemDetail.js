import React from "react";
import PropTypes from 'prop-types';
function ItemDetail(props){
const { item } = props;
  
  return (
<React.Fragment>
<h1>Item Detail</h1>
<h3>{item.name} - {item.description}</h3>
<p>{item.quantity}</p>
<hr />
</React.Fragment>
  );
}


ItemDetail.propTypes = {
  item:PropTypes.object
}
export default ItemDetail;