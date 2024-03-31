import React, { Component } from 'react'
import style from './Header.module.css';
export default class Header extends Component {
  render() {
    return (
      <header className={`${style.header} vh-100 d-flex align-items-center text-center justify-content-center`}>
        <div className="content text-white">
          <h1>Unlimited movies, Tv shows, and more.</h1>
          <p>Wath anywhere. Cancel anytime.</p>
        </div>

      
      </header>
    )
  }
}
