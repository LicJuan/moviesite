import {
    TOP_RATED_MOVIES_FAIL,
    TOP_RATED_MOVIES_REQUEST,
    TOP_RATED_MOVIES_SUCCESS,
    NEW_MOVIES_FAIL,
    NEW_MOVIES_REQUEST,
    NEW_MOVIES_SUCCESS,
    POPULAR_MOVIES_FAIL,
    POPULAR_MOVIES_REQUEST,
    POPULAR_MOVIES_SUCCESS,
    UPCOMING_MOVIES_REQUEST,
    UPCOMING_MOVIES_SUCCESS,
    UPCOMING_MOVIES_FAIL,
    MOVIE_DETAIL_FAIL,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_CREDITS_REQUEST,
    MOVIE_CREDITS_SUCCESS,
    MOVIE_CREDITS_FAIL,
    MOVIE_TRAILER_REQUEST,
    MOVIE_TRAILER_SUCCESS,
    MOVIE_TRAILER_FAIL,
    SIMILAR_MOVIES_REQUEST,
    SIMILAR_MOVIES_SUCCESS,
    SIMILAR_MOVIES_FAIL,
    SEARCH_MOVIES_FAIL,
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_RESET
} from "../constants/MovieConstants";

export const topRatedMoviesReducer = ( state = { movies: [] }, {type, payload} ) => {
    switch (type) {
        case TOP_RATED_MOVIES_REQUEST:
            return { loading: true }

        case TOP_RATED_MOVIES_SUCCESS:
            return { loading: false, movies: payload }

        case TOP_RATED_MOVIES_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}

export const newMoviesReducer = ( state = { movies: [] }, {type, payload} ) => {
    switch (type) {
        case NEW_MOVIES_REQUEST:
            return { loading: true }

        case NEW_MOVIES_SUCCESS:
            return { loading: false, movies: payload }

        case NEW_MOVIES_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}

export const popularMoviesReducer = ( state = { movies: [] }, {type, payload} ) => {
    switch (type) {
        case POPULAR_MOVIES_REQUEST:
            return { loading: true }

        case POPULAR_MOVIES_SUCCESS:
            return { loading: false, movies: payload }

        case POPULAR_MOVIES_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}

export const upcomingMoviesReducer = ( state = { movies: [] }, {type, payload} ) => {
    switch (type) {
        case UPCOMING_MOVIES_REQUEST:
            return { loading: true }

        case UPCOMING_MOVIES_SUCCESS:
            return { loading: false, movies: payload }

        case UPCOMING_MOVIES_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}

export const movieDetailReducer = ( state = { movie: {} }, {type, payload} ) => {
    switch (type) {
        case MOVIE_DETAIL_REQUEST:
            return { loading: true }
        case MOVIE_DETAIL_SUCCESS:
            return { loading: false, movie: payload }
        case MOVIE_DETAIL_FAIL:
            return { loading: false, error: payload }
        default:
            return state
    }
}

export const movieCreditsReducer = ( state = { credits: {} }, {type, payload} ) => {
    switch (type) {
        case MOVIE_CREDITS_REQUEST:
            return { loading: true }
        case MOVIE_CREDITS_SUCCESS:
            return { loading: false, credits: payload }
        case MOVIE_CREDITS_FAIL:
            return { loading: false, error: payload }
        default:
            return state
    }
}

export const movieTrailerReducer = ( state = { videos: {} }, {type, payload} ) => {
    switch (type) {
        case MOVIE_TRAILER_REQUEST:
            return { loading: true }
        case MOVIE_TRAILER_SUCCESS:
            return { loading: false, videos: payload }
        case MOVIE_TRAILER_FAIL:
            return { loading: false, error: payload }
        default:
            return state
    }
}

export const similarMoviesReducer = ( state = { movies: [] }, {type, payload} ) => {
    switch (type) {
        case SIMILAR_MOVIES_REQUEST:
            return { loading: true }

        case SIMILAR_MOVIES_SUCCESS:
            return { loading: false, movies: payload }

        case SIMILAR_MOVIES_FAIL:
            return { loading: false, error: payload }

        default:
            return state
    }
}

export const searchMovieReducer = ( state = { movieResults: [] }, {type, payload} ) => {
    switch (type) {
        case SEARCH_MOVIES_REQUEST:
            return { loading: true }
        case SEARCH_MOVIES_SUCCESS:
            return { loading: false, movieResults: payload }
        case SEARCH_MOVIES_FAIL:
            return { loading: false, error: payload }
        case SEARCH_MOVIES_RESET:
            return { movieResults: [] }
        default:
            return state;
    }
}