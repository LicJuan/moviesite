import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieCredits } from '../actions/MoviesActions'
import { API_IMG_CALL } from '../constants/ApiConstants'

export const Credit = ({id}) => {
    const dispatch = useDispatch()
    const { loading, error, credits } = useSelector(state => state.movieCredits)
    useEffect(() => {
        dispatch( getMovieCredits( id ) )
    }, [dispatch, id])
    return (
        <>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {credits?.cast?.map((act, idx) => (
                idx < 10 && <div key={ act.id } className="card-staff">
                        <div className="card-staff__img">
                            <img src={ `${API_IMG_CALL + act.profile_path}` }
                            alt="img" />
                        </div>
                        <div className="card-staff__info">
                            <h3>{ act.name }</h3>
                            <h4>{ act.character }</h4>
                        </div>
                        </div>
            ))}
        </>
    )
}
