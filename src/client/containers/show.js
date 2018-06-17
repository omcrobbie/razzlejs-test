import Layout from "../components/MyLayout";
import { connect } from 'react-redux';
import React from 'react'

const Show = ({shows, match}) => {
    const show = shows[parseInt(match.params.id)] 
    return (
        <Layout>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium}/>
        </Layout>
    )
}
const ms2p = ({shows}) => {
    return {
        shows
    }
}
export default connect(ms2p)(Show)