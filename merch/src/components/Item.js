import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
      <h3>{props.quantity}</h3>
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