import React from 'react'

handleChange = () => {
  selectTransaction()
}


const Search = () => {
  return (
    <div className="ui huge fluid icon input">
      <input onChange={this.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
