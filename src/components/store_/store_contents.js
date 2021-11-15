import React, {Component} from 'react';
import Snack from './snack';
import Ticket from './ticket';
import Goods from './goods';
import Store_details from './Store_details';

class Store_Content extends Component {
  render(){
    if (this.props.in_detail) {
      return(<Store_details></Store_details>);
    }
    if (this.props.tab === "snack") {
      return (<Snack onChangeDetail={this.props.onChangeDetail}></Snack>);
    }
    else if(this.props.tab === "ticket"){
      return(<Ticket onChangeDetail={this.props.onChangeDetail}></Ticket>)
    }
    else if(this.props.tab === "goods"){
      return(<Goods onChangeDetail={this.props.onChangeDetail}></Goods>)
    }
  }
}

export default Store_Content;