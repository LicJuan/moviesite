import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '../actions/MoviesActions'
import { Card } from './Card'
import { Loader } from './Loader'
import { Paginate } from './Paginate'

export const SearchBlock = () => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { loading, error, movieResults } = useSelector(state => state.movieResults)
    const onChangeHandler = page => {
        setPage(page)
        dispatch( searchMovies( movieResults.q, page ) )
    }
    return loading
        ? <Loader />
        : error ? <p>{error}</p>
        : (
            <section className="section container mt-5">
                <h1 className="section__title mt-2">Mostrando Resultados de: "{movieResults.q.toUpperCase()}"</h1>
                <div className="section__list mt-4">
                    {
                        movieResults.results.length > 1 ? movieResults.results?.map((r)=> (
                            <Card mov={r} key={r.id} />
                        )) : <p style={{
                            color: '#d2d2d2',
                            textAlign: 'center',
                            fontWeight: 'lighter'
                        }}>No hay registros que coinciden con la busqueda...</p>
                    }
                </div>
                {
                    movieResults.results.length > 1 && <Paginate
                    current={ movieResults.page }
                    totalItems={ movieResults.total_results }
                    onChange={ onChangeHandler }
                />
                }
            </section>
        )
}
