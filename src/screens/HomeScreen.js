import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedMovies } from '../actions/MoviesActions'
import { Loader } from '../components/Loader'
import { Slider } from '../components/Slider'

export const HomeScreen = () => {

    const dispatch = useDispatch()
    const { loading, movies, error } = useSelector(state => state.topRatedMovies)

    useEffect(() => {
        dispatch( getTopRatedMovies() )
    }, [dispatch])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MovieSite | El mejor sitio de peliculas</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <div>

                {
                    loading ? <Loader />
                    : error ? <p>{error}</p>
                    : <Slider data={movies} />
                }
            </div>
        </>

    )
}
