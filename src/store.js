import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    newMoviesReducer,
    topRatedMoviesReducer,
    popularMoviesReducer,
    upcomingMoviesReducer,
    movieDetailReducer,
    movieCreditsReducer,
    movieTrailerReducer,
    similarMoviesReducer,
    searchMovieReducer
} from './reducers/MoviesReducer'

const reducers = combineReducers({
    topRatedMovies: topRatedMoviesReducer,
    newMovies: newMoviesReducer,
    popularMovies: popularMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    movieDetail: movieDetailReducer,
    movieCredits: movieCreditsReducer,
    movieTrailer: movieTrailerReducer,
    similarMovies: similarMoviesReducer,
    movieResults: searchMovieReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))