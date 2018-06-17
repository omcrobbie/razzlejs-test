import Types from './show.actionTypes'
import { fetchAllShows } from '../../services/tv-maze'

export const getInitialState = async () => {
    const data = await fetchAllShows()
    return data.map(({show}) => show)
}
export const reducer = (state = [], action) => {
    switch(action.type) {
        case Types.FETCHED_SHOW:
            return Object.assign({}, state, {
                currentShow: action.payload
            })
        case Types.FETCHED_SHOWS:
            return Object.assign({}, state, {
                shows: action.payload
            })
        default:
            return state
    }
}