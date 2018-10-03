import React from 'react'

// const Search = () => {
class Search extends React.Component {
  //passing props: this.props.filterSearch
  constructor(props){
    super(props);
    this.state = {
      value: " "
    }
  }

  handleChange = (event)=> {
    console.log("handleChange: ",event.target.value)
    this.setState({
      value: event.target.value
    })

  }
  // handleSubmit = (event)=> {
  //   console.log(this.state.value)
  //   event.preventDefault();
  //
  // }

  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}


export default Search;
