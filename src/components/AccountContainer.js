import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super();
    this.state = {
      transactions: [...transactions],
      search: ''
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  displayAllTransactions = (transactions) => {
    this.setState({
      transactions: transactions
    })
  }

  handleChange = (searchTerm) => {
    this.setState({
      search: searchTerm
    })
  }


  filterTransactions = () => {
    let newTransactions = this.state.transactions.filter((transaction) => {
      return transaction.description.toLowerCase() === this.state.search.toLowerCase()
    })
    //debugger
    //filterTransaction will return an array
    this.setState({
      transactions: newTransactions
    })
  }

  render() {

    return (
      <div>
        <Search search={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
        {this.state.search != '' ? this.filterTransactions() : null}
      </div>
    )
  }
}

export default AccountContainer
