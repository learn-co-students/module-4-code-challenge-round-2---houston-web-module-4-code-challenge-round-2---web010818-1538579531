import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super();

    this.state = {
      trxns: transactions,
      searchTransaction: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({searchTransaction: e.target.value}, this.selectTransaction);
  }

  selectTransaction = () => {
    const allTrxns = this.state.trxns
    const filtered = allTrxns.filter((trxn) => {
      return trxn.description.includes(this.state.searchTransaction)
    })
    this.setState({trxns: filtered})
  }

  render() {
   //console.log(transactions)
    return (
      <div>
        <Search selectTransaction={this.searchTransaction} handleChange={this.handleChange}/>
        <TransactionsList trxns={this.state.trxns} />
      </div>
    )
  }
}

export default AccountContainer
