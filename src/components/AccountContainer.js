import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super();

    this.state = {
      trxns: transactions,
      selectedTransaction: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  // handleChange(event) {
  //   // your code here
  // }

  // componentDidMount() {
  //   fetch('../transactionsData')
  //     .then(resp => resp.json())
  //     .then(trxns => {
  //         this.setState({ trxns:trxns })
  //     })
  // }

  selectTransaction = () => {
    this.setState({trxns:this.state.trxns, selectedTransaction:this.state.selectedTransaction})
  }

  render() {
   //console.log(transactions)
    return (
      <div>
        <Search selectTransaction={this.selectTransaction}/>
        <TransactionsList trxns={this.state.trxns} />
      </div>
    )
  }
}

export default AccountContainer
