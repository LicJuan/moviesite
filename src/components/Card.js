import React from 'react'
import { API_IMG_CALL } from '../constants/ApiConstants'
import { IoFilmOutline, IoStar } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SEARCH_MOVIES_RESET } from '../constants/MovieConstants'


export const Card = ({mov}) => {
    const dispatch = useDispatch()
    const clearSearch = () => {
        dispatch({type: SEARCH_MOVIES_RESET})
    }
    return (
        <div className="card">
            <div className="card__img">
                <img src={`${API_IMG_CALL + mov?.poster_path}`} alt="imagen" />
            </div>
            <div className="card__body">
                <div className="card__body-info">
                    <h1>{ mov.title }</h1>
                    <div className="flex">
                        <span>{ mov.release_date?.substring(0, 4) }</span>
                        <span>
                            <IoStar className='icon' />
                            {mov.vote_average}/10
                        </span>
                    </div>
                    <div className="card__body-btn">
                        <Link to={`/movie/${mov.id}`}
                        onClick={clearSearch}
                        className="btn btn--primary btn--sm mt-1">
                            <IoFilmOutline className='mr-0-5' />
                            Mas Info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
