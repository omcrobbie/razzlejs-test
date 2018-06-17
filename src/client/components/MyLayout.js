import Header from "./header";
import PropTypes from 'prop-types'
import React from 'react'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)
Layout.propTypes = {
    children: PropTypes.any
}
export default Layout