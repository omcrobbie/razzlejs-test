import Layout from "../components/MyLayout";
import { connect } from 'react-redux'
import React from 'react'

export const Post = ({posts, match}) => {
    const post = posts[parseInt(match.params.id)]
    return (
        <Layout>
            <h1>{post.t}</h1>
            <p>{post.c}</p>
        </Layout>
    )
}
const ms2p = ({posts}) => {
    return {
        posts
    }
}
export default connect(ms2p)(Post)