import React, {Component} from 'react'
import Transaction from './TransactionsList'

class TransactionsList extends Component {
  renderTransaction = () => {
    console.log(this.props.transactions)
    return this.props.transactions.map(transaction => (
    <Transaction/>
  ))
  // return "hello"
  }


  render () {
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
          {this.renderTransaction()}
        </tbody>
      </table>
    )
  }
}

export default TransactionsList
