import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {
    IoArrowUndo,
    IoClose,
    IoPlay
} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetail, getMovieTrailer, getSimilarMovies } from '../actions/MoviesActions'
import { Card } from '../components/Card'
import { Credit } from '../components/Credit'
import { Footer } from '../components/Footer'
import { Iframe } from '../components/Iframe'
import { Loader } from '../components/Loader'
import { Rating } from '../components/Rating'
import { API_IMG_CALL } from '../constants/ApiConstants'

export const MovieDetailScreen = ({ history, match }) => {
    const { id } = match.params
    const dispatch = useDispatch()
    const { loading, error, movie } = useSelector(state => state.movieDetail)
    const { loading:loadTrailer, error:errTrailer, videos } = useSelector(state => state.movieTrailer)
    const { loading:loadSimilar, error:errSimilar, movies:similarMovies } = useSelector(state => state.similarMovies)
    const backHandler = () => {
        history.goBack()
    }
    useEffect(() => {
        dispatch(getMovieDetail(id))
        dispatch(getMovieTrailer(id))
        dispatch(getSimilarMovies(id))
        minutesToHours()
    }, [dispatch, id])
    function minutesToHours(mins) {
        var hour = Math.floor(mins / 60);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor(mins % 60);
        minute = (minute < 10)? '0' + minute : minute;
        return `${hour}h ${minute}m`;
    }

    const displayTrailerHandler = () => {
        document.querySelector('.overlay').classList.add('active')
    }

    const closeTrailerHandler = () => {
        document.querySelector('.overlay').classList.remove('active')
    }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{movie?.title}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            {
                loading ? <Loader />
                : error ? <p>{error}</p>
                : movie && (
                    <>
                    {
                        loadTrailer ? <p>Cargando...</p>
                        : errTrailer ? <p>{errTrailer}</p>
                        : (
                            <div className="overlay" onClick={closeTrailerHandler}>
                                <button className="btn" onClick={ closeTrailerHandler }>
                                    <IoClose id='close-overlay' />
                                </button>
                                <Iframe videos={ videos } />
                            </div>
                        )
                    }
            <section
            className="detail container"
            style={{
                background: `radial-gradient(rgba(0,0,0,.6), black), url(${API_IMG_CALL + movie.backdrop_path}) no-repeat center center /cover`,
                backgroundAttachment: 'fixed'
            }}>
                <div className="detail__content">
                    <a onClick={ backHandler } href className="btn btn--outline btn--sm">
                        <IoArrowUndo />
                        Atras
                    </a>
                    <div className="detail__content-general">
                        <div className="detail__content-general-img">
                            <img src={`${API_IMG_CALL + movie.poster_path}`} alt="imagen" />
                        </div>
                        <div className="detail__content-general-block">
                            <div className="flex">
                                <span className="genre">
                                    {movie.genres?.map((g, idx)=> (
                                        <span key={ g.id }>{idx === 0 ? '': '/'}{g.name}</span>
                                    ))}
                                </span>
                                <span className="year">
                                    {movie.release_date?.substring(0, 4)}
                                </span>
                            </div>
                            <h1 className="title">{movie.title}</h1>
                            <h3 className="tagline">{movie.tagline}</h3>
                            <div className="flex">
                                <span className="duration">{ minutesToHours(movie.runtime) }</span>
                                {
                                    videos?.results?.length ? (
                                        <a href onClick={ displayTrailerHandler } className="btn btn--primary btn--sm">
                                            <IoPlay />
                                            Ver Trailer
                                        </a>
                                    ) : ''
                                }
                            </div>
                            <div className="flex mt-4">
                                <Rating movie={movie} />
                                <span className="rating--count">{movie.vote_average}/10 ({movie.vote_count} votantes)</span>
                            </div>
                            <h3 className="mt-2">Sinopsis</h3>
                            <p className="detail-p">{movie.overview}</p>
                        </div>
                    </div>
                    <div className="detail__staff">
                        <h2 className="mt-4">Reparto Principal</h2>
                        <div className="detail__staff-container">
                            <Credit id={movie.id} />
                        </div>
                    </div>
                </div>
                <section className="section container mt-5">
                    <h1 className="section__title">Peliculas Similares</h1>
                    <div className="section__list mt-2">
                        { loadSimilar && <p>Cargando...</p> }
                        { errSimilar && <p>{errSimilar}</p> }
                        {
                            similarMovies?.results?.length ? similarMovies?.results.map((mov, idx) => (idx <= 5 && <Card mov={mov} />))
                            : <p style={{color: '#d2d2d2', textAlign: 'center'}}>No hay peliculas similares...</p>
                        }
                    </div>
                </section>
            </section>
                    <Footer />
                    </>
                )
            }
        </>
    )
}
