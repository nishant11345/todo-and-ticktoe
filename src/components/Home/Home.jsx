import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <nav className="navbar">
          <ul className="navbar-list">
           
            <li className="navbar-item">
              <Link to="/todo" className="navbar-link">Todo</Link>
            </li>
            <li className="navbar-item">
              <Link to="/tictactoe" className="navbar-link">Tic-Tac-Toe</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Home