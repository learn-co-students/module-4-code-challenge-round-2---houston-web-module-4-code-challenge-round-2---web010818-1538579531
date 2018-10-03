import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: transactions,
    searchText: ""
  }

  handleChange=(searchText)=>{
    console.log(`handleChange`, searchText)
    this.setState({searchText: searchText})
  }


  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange} searchText={this.state.searchText}/>
        <TransactionsList transactions = {this.state.transactions} searchText={this.state.searchText}/>
      </div>
    )
  }
}

export default AccountContainer
