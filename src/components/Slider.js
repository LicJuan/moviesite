import React, { useEffect } from 'react'
import { IoArrowBackOutline, IoArrowForwardOutline, IoFilmOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { API_IMG_CALL } from '../constants/ApiConstants'

export const Slider = ({data}) => {
    let slideIndex = 0
    useEffect(()=>{
        document.querySelector('.slider__cant-total').innerText = document.querySelectorAll('.slider__item').length
        // setInterval(() => {
        //     nextHandler()
        // }, 10000);
    }, [])

    const changeSlide = () => {
        const current = document.querySelector('.slider__cant-current')
        document.querySelectorAll('.slider__item').forEach(slider => slider.classList.remove('slider__item--active'));
        document.querySelectorAll('.slider__item')[slideIndex]?.classList.add('slider__item--active')
        current.innerHTML = `${slideIndex + 1} /`
    }

    const nextHandler = () => {
        slideIndex++
        if( slideIndex >= document.querySelectorAll('.slider__item').length ) {
            slideIndex = 0
        }
        changeSlide()
    }

    const prevHandler = () => {
        slideIndex--
        if( slideIndex < 0 ) {
            slideIndex = document.querySelectorAll('.slider__item').length - 1
        }
        changeSlide()
    }

    return (
        <section className="slider">
        {
            data.results?.map( (mov, idx) => (
                <div
                key={ mov.id }
                className={`slider__item ${idx === 0 ? 'slider__item--active' : ''}`}
                style={{background: `radial-gradient(rgba(0,0,0,.7), black), url(${API_IMG_CALL + mov.backdrop_path}) no-repeat center /cover`}}>
                        <div className="slider__item-content">
                            {/* <span className="slider__item-content-genre">Drama</span> */}
                            <h1 className="slider__item-content-title">
                                { mov.title }
                                {/* <span className="slider__item-content-title-year">
                                    { mov.release_date.substring(0, 4) }
                                </span> */}
                            </h1>
                            <p className="slider__item-content-overview">
                                {/* {mov.overview.length > 300
                                    ? `${mov.overview.substring(0, 300)}...`
                                    : mov.overview
                                } */}
                                {mov.overview}
                            </p>
                            <Link to={`/movie/${mov.id}`} className="slider__item-content-cta btn btn--primary">
                                <IoFilmOutline className="mr-0-5" />
                                Mas Info
                            </Link>
                        </div>
                </div>
            ))
        }
        <button className="slider__btn slider__btn--prev" onClick={ prevHandler } >
            <IoArrowBackOutline />
        </button>
        <button className="slider__btn slider__btn--next" onClick={ nextHandler } >
            <IoArrowForwardOutline />
        </button>
        <span className="slider__cant">
            <span className="slider__cant-current">1 /</span>
            <span className="slider__cant-total"></span>
        </span>
    </section>
    )
}