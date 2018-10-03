import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import { transactions } from '../transactionsData';

class AccountContainer extends Component {
  state = {
    transactions: { transactions },
    searchTerm: '',
    foundTransactions: []
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    let word = event.target.value;
    this.setState({ searchTerm: word });
    // console.log(this.state.transactions.transactions[0].description);
    this.findTransactions();
  };

  findTransactions = () => {
    console.log('finding transactions');
    let newTransactions = this.state.transactions.transactions.filter(
      (transaction) =>
        transaction.description.includes(this.state.searchTerm) ||
        transaction.category.includes(this.state.searchTerm)
    );
    this.setState({ foundTransactions: newTransactions });
    console.log(this.state.foundTransactions);
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <Search handleChange={this.handleChange} />

        {this.state.foundTransactions.length > 0 ? (
          <TransactionsList transactions={this.state.foundTransactions} />
        ) : (
          <TransactionsList
            transactions={this.state.transactions.transactions}
          />
        )}
      </div>
    );
  }
}

export default AccountContainer;
