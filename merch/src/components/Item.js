import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  const itemStyles = {
    backgroundColor: '#e6a5a7',
    border: 'solid',
    borderRadius: '15px',
    textAlign: 'center',
    padding: '10px'
  }
  return(
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)} style={itemStyles}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <h5>{props.quantity}</h5>
      </div>
    </React.Fragment>
  );

}
Item.propTypes ={
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked:PropTypes.func
};
export default Item;








// function Ticket(props){
//   return (
//     <React.Fragment>
//       <h3>{props.location} - {props.names}</h3>
//       <p><em>{props.issue}</em></p>
//       <hr/>
//     </React.Fragment>
//   );
// }
// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };