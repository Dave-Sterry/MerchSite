import React from 'react';
import ItemsAll from './ItemsAll';
import NewItemForm from './NewItemForm';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage:false,
      masterItemList: [],
      selectedItem : null
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null){
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    })
  }

  render(){
    let currenltyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem !=null){
      currenltyVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem}/>
      buttonText = "Return to Item List"
    }
    else if(this.state.formVisibleOnPage){
      currenltyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List"
    } else {
      currenltyVisibleState = <ItemsAll itemList= {this.state.masterItemList} onItemSelection = {this.handleChangingSelectedItem}/>
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