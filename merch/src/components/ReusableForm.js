import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){

  const inputStyles={
    padding: "5px",
    marginTop: "2.5px",
    marginBottom: "2.5px",
    display: "block",
  };

  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} >
        <input
          style={inputStyles}
          type='text'
          name='name'
          placeholder="Product Name" />
          <input 
            style={inputStyles}
            type='text'
            name='description'
            placeholder='Product Description'/>
          <input 
            style={inputStyles}
            type='number'
            name='quantity'
            placeholder='Quantity' />
            <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
    );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;