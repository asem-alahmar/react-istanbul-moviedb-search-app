import React, {Component} from 'react'

class NoResult extends Component{
  clicked(){
    this.props.click()
  }
  render(){
    return (
      <div className='fallBack'>
        <h5>No results found.</h5>
        <p>Wanna check <b onClick={this.props.click}>Trending movies</b> instead?</p>
      </div>
    )
  }
}
export default NoResult