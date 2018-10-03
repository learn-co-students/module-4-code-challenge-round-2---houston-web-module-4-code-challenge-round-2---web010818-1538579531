import React, {Component} from 'react';
// import Transaction from './TransactionsList'
import Transaction from './Transaction'

class TransactionsList extends Component {

  renderTransaction = () => {
      const filteredTransactions = this.props.transactions.filter((transaction) =>{
        console.log(transaction)
      return transaction.category.includes(this.props.searchTerm) || transaction.description.includes(this.props.searchTerm)
    })
      return filteredTransactions.map((transaction) => {

        return <Transaction transaction={transaction} key={transaction.id}/>
    })
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
