import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state ={
      // transactions: transactions, //this is the transactionsData.js info
      fetchedTransactions: [], // this is fetched tranactions
      filteredTransactions: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    return fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then(resp=>resp.json())
      .then(fetchedTransactions => {
        return (this.setState({fetchedTransactions: fetchedTransactions}))
      })
  }


  filterSearch = (value) => {
    console.log("filterSearch: ", value)
    // const results = this.state.fetchedTranactions.filter(word => {
    //   word.includes(value)
    // } )

    // this.state.fetchedTransactions.filter(filteredTransaction => {
    //   if(filteredTransaction.description.includes(value) {
    //
    //   })
    // })
  }

  render() {
    console.log("AccountContainer: ", this.state.transactions, this.state.fetchedTransactions, this.filterSearch())

    return (
      <div>
        <Search
          transactions={this.state.fetchedTransactions}
          filteredTransactions={this.state.filteredTransactions}
          filterSearch={this.filterSearch()}/>
        <TransactionsList transactions={this.state.fetchedTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
