import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

export default class AccountContainer extends Component {

  // constructor() {
  //   super()

  //   get a default state working with the data imported from TransactionsData
  //   use this to get the functionality working
  //   then replace the default transactions with a call to the API

  // }

  state = {
    transactions: [],
    searchTerm: ""
  }

    componentDidMount(){
      // console.log("hello")
      fetch("https://boiling-brook-94902.herokuapp.com/transactions")
        .then( resp => resp.json() )
        .then(data => {
          this.setState({
            transactions: data
          })
        })
  }
  
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}
