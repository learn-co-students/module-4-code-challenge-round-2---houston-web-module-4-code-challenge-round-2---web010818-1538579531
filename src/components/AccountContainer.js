import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
    state = {
      transactions: transactions,
      searchTerm: ''
    }



    // get a default state working with the data imported from TransactionsData


  handleChange = (newSearch) => {
    console.log(newSearch)
      this.setState({searchTerm: newSearch})
    }


  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default AccountContainer
