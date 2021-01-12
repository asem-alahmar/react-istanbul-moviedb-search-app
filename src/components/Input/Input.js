import React, {Component} from 'react'

class Input extends Component{
  render(){
    return (
      <div className='inputbtn'>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search for Movies...                                                                   'istanbulmovie.com' "
            onChange={(e)=>this.props.change(e)}/>
          <div className="input-group-append search-btn">
            <span className="input-group-text" id="basic-addon2"> Search </span>
          </div>
        </div>
      </div>
    )
  }
}
export default Input