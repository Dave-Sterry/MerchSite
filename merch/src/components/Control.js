import React from 'react';
import ItemsAll from './ItemsAll';
import NewItemForm from './NewItemForm';

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage:false,
      masterItemList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }))
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    })
  }

  render(){
    let currenltyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currenltyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List"
    } else {
      currenltyVisibleState = <ItemsAll itemList= {this.state.masterItemList} />
      buttonText = "Add an Item";
    }
    return(
      <React.Fragment>
        {currenltyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;