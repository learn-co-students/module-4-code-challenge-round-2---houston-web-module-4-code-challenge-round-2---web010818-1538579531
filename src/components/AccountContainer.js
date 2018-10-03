import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
    state = {
      transactions: transactions
      // search: ''
    }
    // get a default state working with the data imported from TransactionsData


  handleChange(event) {
    // this.setState()
  }

  render() {
    // console.log(this.state.transactions)
    // console.log(transactions)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
