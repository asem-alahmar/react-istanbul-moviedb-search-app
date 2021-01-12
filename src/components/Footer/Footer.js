import React, {Component} from 'react'

class Footer extends Component {
  render(){
    return (
       <div className="footer">
        <div className="line"></div>
        <div className='footDesc'>
          <h5>istanbulmovie.com</h5>
          <p>This website Built made with ReactJS. 'MovieDB project'<a href='https://www.linkedin.com/in/mohamad-asem-alahmar/'>check my website</a></p>
        </div>
        <div className='footcopy'>
          <p>2021 © All rights reserved.</p>
        </div>
      </div>
    )
  }
}
export default Footer