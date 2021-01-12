import React, {Component, Fragment} from 'react'

class Header extends Component {
  render(){
    return(
      <Fragment>
        <div className="header">
          <h1>Istanbul MovieDB App</h1> 
          <p>Welcome to Istanbul movie search app. This app is using the MovieDB database"API" to render data and movie information.</p>
        </div>
      </Fragment>
    )
  }
}
export default Header


