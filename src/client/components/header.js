import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    marginRight: 15
}
const Header = () => (
    <div>
            <Link to="/" style={linkStyle}>Home</Link>
        
            <Link to="/about" style={linkStyle}>About</Link>
        
            <Link to="/shows" style={linkStyle}>Batman!</Link>
    </div>
)
export default Header