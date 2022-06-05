import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
        <nav className="nav">
          <h1 className='app-name'>newsMonkey</h1>
          <Link to="/business">business</Link>
          <Link to="/entertainment">entertainment</Link>
          <Link to="/general">general</Link>
          <Link to="/health">health</Link>
          <Link to="/science">science</Link>
          <Link to="/sports">sports</Link>
          <Link to="/technology">technology</Link>
        </nav>
    )
  }
}
