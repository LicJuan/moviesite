import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../actions/MoviesActions'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { Loader } from '../components/Loader'
import { Paginate } from '../components/Paginate'

export const PopularMoviesScreen = () => {
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const { loading, movies, error } = useSelector(state => state.popularMovies)

    useEffect(() => {
        dispatch( getPopularMovies(page) )
    }, [dispatch, page])

    const onChangeHandler = page => setPage(page)

    return loading ? <Loader /> : (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MovieSite | Mas populares</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <section className="section container mt-5">
                <h1 className="section__title mt-2">Peliculas mas populares</h1>
                { error && <p>{error}</p> }
                <div className="section__list mt-4">
                    {
                        movies.results?.map( mov => (
                            <Card mov={mov} key={ mov.id } />
                        ))
                    }
                </div>
                <Paginate
                    current={movies.page}
                    totalItems={ movies.total_results }
                    onChange={onChangeHandler}
                />
            </section>
            <Footer />
        </>
    )
}


