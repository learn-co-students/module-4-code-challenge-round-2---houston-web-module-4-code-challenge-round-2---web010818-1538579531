import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super();
    this.state = {
      transactions: [],
      searchTerm: "",
      isLoaded: false
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    this.setState({
      transactions: transactions, isLoaded: true
    })
  }

  handleChange = (input) => {
    console.log(input)
    let searchTermNew = input;
      this.setState({
        searchTerm: searchTermNew
      })
  }

  filterByCategory = () => {
    let newTransactions = this.state.transactions.filter(transaction => {
      return transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      // console.log("hey")
      this.setState({
        transactions: newTransactions
      })
    })
  }

  render() {
    return (
      this.state.isLoaded ? (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} filterByCategory={this.filterByCategory} searchTerm={this.state.searchTerm}/>
      </div> ) : (<div>Loading</div>)
    )
  }
}

export default AccountContainer;
