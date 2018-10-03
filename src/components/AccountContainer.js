import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      searchTerm: ""
    };
  }

  fetchData() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions").then(
      response =>
        response.json().then(data => this.setState({ transactions: data }))
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSearch = input => {
    this.setState({ searchTerm: input });
  };

  displayTransactions = () => {
    return this.state.transactions.filter(
      transaction =>
        transaction.description
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        transaction.category
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <TransactionsList transactions={this.displayTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
