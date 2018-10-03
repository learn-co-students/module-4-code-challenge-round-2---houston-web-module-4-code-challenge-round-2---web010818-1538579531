import React, { Component } from 'react'
import Transaction from './Transaction'

class TransactionsList extends Component {

  getTransactions = () => {
    return this.props.filteredTransactions.map( transaction => {
      return <Transaction transaction={transaction} />
    })
  }

  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Posted At
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Category
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Amount
              </h3>
            </th>
          </tr>

          {this.getTransactions()}

        </tbody>
      </table>
    )
  }

}

export default TransactionsList
