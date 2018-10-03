import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super();
    this.state = {
      transactions: transactions,
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    const filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.category === this.state.searchTerm || transaction.description === this.state.searchTerm
    })
    return (
      <div>
        <Search transactions={this.state.transactions} handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList filteredTransactions={filteredTransactions} />
      </div>
    )
  }
}

export default AccountContainer
