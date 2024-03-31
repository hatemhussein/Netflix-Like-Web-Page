import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    let {img, name} = this.props.movie;
    return (
      <div className="col-md-3">
        <img src={`assets/img/${img}`} alt=""className='w-100' />
        <h2 className='py-3'>{name}</h2>
      </div>
    )
  }
}
