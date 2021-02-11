import React from 'react';
import ItemsAll from './ItemsAll';
import NewItemForm from './NewItemForm';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';


class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage:false,
      masterItemList: [],
      selectedItem : null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null){
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMasterItemList = this.state.masterItemList
      .filter(item=>item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
      editing: false,
      selectedItem: null
    })
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
      selectedItem: null,
      editing: false
    })
  }

  render(){
    let currenltyVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currenltyVisibleState=<EditItemForm item = {this.state.selectedItem} onEditItem={this.handleEditingItemInList} />
      buttonText="Return to Item List";
    } else if (this.state.selectedItem !=null){
      currenltyVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} onClickingEdit = {this.handleEditClick}/>
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