import Layout from '../components/MyLayout';
import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'

export class Shows extends React.Component {
    render() {
        const {shows} = this.props;
        return (
            <Layout>
                <h1>Batman TV Shows</h1>
                <ul>
                    {shows.map((show, idx) => {
                        return (
                            <li key={show.id}>
                                <Link to={`/shows/${idx}`}>{show.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </Layout>
        )
    }
}
const mapStateToProps = ({shows}) => {
    return {
        shows
    }
}
export default connect(mapStateToProps)(Shows)