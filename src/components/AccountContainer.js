import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    this.state = {
      transactions:[],
      search: "",
    }
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }
  componentDidMount(){
    console.log(transactions)
    this.setState({
      allTransactions: [...transactions]
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      search: event.target.value,
    })
  }
//

//
  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        {!this.state.search ? <TransactionsList allTransactions={this.state.allTransactions} />:
        <TransactionsList allTransactions={this.state.allTransactions.filter(t => {
            return this.state.search.toLowerCase().split(" ").includes(t.category.toLowerCase());
          })} />}
      </div>
    )
  }
}

export default AccountContainer
