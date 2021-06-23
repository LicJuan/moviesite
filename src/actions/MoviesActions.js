import { API_URL, API_KEY, API_LANG, API_URL_SEARCH } from "../constants/ApiConstants";
import {
    TOP_RATED_MOVIES_REQUEST,
    TOP_RATED_MOVIES_SUCCESS,
    TOP_RATED_MOVIES_FAIL,
    NEW_MOVIES_REQUEST,
    NEW_MOVIES_SUCCESS,
    NEW_MOVIES_FAIL,
    POPULAR_MOVIES_REQUEST,
    POPULAR_MOVIES_SUCCESS,
    POPULAR_MOVIES_FAIL,
    UPCOMING_MOVIES_REQUEST,
    UPCOMING_MOVIES_SUCCESS,
    UPCOMING_MOVIES_FAIL,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_CREDITS_REQUEST,
    MOVIE_CREDITS_SUCCESS,
    MOVIE_TRAILER_REQUEST,
    MOVIE_TRAILER_SUCCESS,
    SIMILAR_MOVIES_REQUEST,
    SIMILAR_MOVIES_SUCCESS,
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_FAIL,
    SEARCH_MOVIES_SUCCESS,
    MOVIE_DETAIL_FAIL,
    MOVIE_CREDITS_FAIL,
    MOVIE_TRAILER_FAIL,
    SIMILAR_MOVIES_FAIL
} from "../constants/MovieConstants"

export const getTopRatedMovies = (page) => async (dispatch) => {
    dispatch({type: TOP_RATED_MOVIES_REQUEST})
    try {
        const res = await fetch(`${API_URL}/top_rated?api_key=${API_KEY}&language=${API_LANG}&page=${page}`)
        const data = await res.json()
        dispatch({
            type: TOP_RATED_MOVIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: TOP_RATED_MOVIES_FAIL,
            payload: err
        })
    }
}

export const getNewMovies = (page) => async (dispatch) => {
    dispatch({type: NEW_MOVIES_REQUEST})
    try {
        const res = await fetch(`${API_URL}/now_playing?api_key=${API_KEY}&language=${API_LANG}&page=${page}`)
        const data = await res.json()
        dispatch({
            type: NEW_MOVIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: NEW_MOVIES_FAIL,
            payload: err
        })
    }
}

export const getPopularMovies = (page) => async (dispatch) => {
    dispatch({type: POPULAR_MOVIES_REQUEST})
    try {
        const res = await fetch(`${API_URL}/popular?api_key=${API_KEY}&language=${API_LANG}&page=${page}`)
        const data = await res.json()
        dispatch({
            type: POPULAR_MOVIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: POPULAR_MOVIES_FAIL,
            payload: err
        })
    }
}

export const getUpcomingMovies = (page) => async (dispatch) => {
    dispatch({type: UPCOMING_MOVIES_REQUEST})
    try {
        const res = await fetch(`${API_URL}/upcoming?api_key=${API_KEY}&language=${API_LANG}&page=${page}`)
        const data = await res.json()
        dispatch({
            type: UPCOMING_MOVIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: UPCOMING_MOVIES_FAIL,
            payload: err
        })
    }
}

export const getMovieDetail = (id) => async (dispatch) => {
    dispatch({type: MOVIE_DETAIL_REQUEST})
    try {
        const res = await fetch(`${API_URL}/${id}?api_key=${API_KEY}&language=${API_LANG}`)
        const data = await res.json()
        dispatch({
            type: MOVIE_DETAIL_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: MOVIE_DETAIL_FAIL,
            payload: err
        })
    }
}

export const getMovieCredits = (id) => async (dispatch) => {
    dispatch({type: MOVIE_CREDITS_REQUEST})
    try {
        const res = await fetch(`${API_URL}/${id}/credits?api_key=${API_KEY}&language=${API_LANG}`)
        const data = await res.json()
        dispatch({
            type: MOVIE_CREDITS_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: MOVIE_CREDITS_FAIL,
            payload: err
        })
    }
}

export const getMovieTrailer = (id) => async (dispatch) => {
    dispatch({type: MOVIE_TRAILER_REQUEST})
    try {
        const res = await fetch(`${API_URL}/${id}/videos?api_key=${API_KEY}&language=${API_LANG}`)
        const data = await res.json()
        dispatch({
            type: MOVIE_TRAILER_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: MOVIE_TRAILER_FAIL,
            payload: err
        })
    }
}

export const getSimilarMovies = (id) => async (dispatch) => {
    dispatch({type: SIMILAR_MOVIES_REQUEST})
    try {
        const res = await fetch(`${API_URL}/${id}/similar?api_key=${API_KEY}&language=${API_LANG}`)
        const data = await res.json()
        dispatch({
            type: SIMILAR_MOVIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: SIMILAR_MOVIES_FAIL,
            payload: err
        })
    }
}

export const searchMovies = (q, page) => async (dispatch) => {
    dispatch({type: SEARCH_MOVIES_REQUEST})
    try {
        const res = await fetch(`${API_URL_SEARCH}/movie?api_key=${API_KEY}&language=${API_LANG}&query=${q}&page=${page}`)
        const data = await res.json()
        data.q = q
        dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: SEARCH_MOVIES_FAIL,
            payload:
             err
        })
    }
}