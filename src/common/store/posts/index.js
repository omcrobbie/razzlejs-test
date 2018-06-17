import Type from './post.actionTypes'

export const getInitialState = () => {
    return [
        {
            id:'hello-nextjs',
            t:'Hello Next.js',
            c:'Content for Hello Next.js'
        },
        {
            id:'nextjs-awesome',
            t:'Learn Next.js is awesome',
            c:'Next.js is awesome!'
        }, 
        {
            id:'deploy-apps',
            t:'Deploy apps with Zeit',
            c:'We\'re not going to do that...'
        }
    ]
} 
export const reducer = (state = [], {type, payload}) => {
    switch(type) {
        case Type.SET_POST:
            return Object.assign({}, state, {
                currentPost: payload
            })
        default: 
            return state
    }
}