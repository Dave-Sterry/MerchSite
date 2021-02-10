import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
      <h3>{props.quantity}</h3>
    </React.Fragment>
  );

}
Item.propTypes ={
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.int.isRequired
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