import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'
import Logo from '../assets/img/logo.png'
import { SearchForm } from './SearchForm'
import { useDispatch } from 'react-redux'
import { SEARCH_MOVIES_RESET } from '../constants/MovieConstants'

export const Header = () => {

    const dispatch = useDispatch()

    const displayMenuFunc = () => {
        document.querySelector('.header__items').classList.add('header__items--active')
        document.querySelector('.icon--bars').style.display = 'none'
        document.querySelector('.icon--close').style.display = 'block'
    }

    const closeMenuFunc = () => {
        document.querySelector('.header__items').classList.remove('header__items--active')
        document.querySelector('.icon--bars').style.display = 'block'
        document.querySelector('.icon--close').style.display = 'none'
        dispatch({type: SEARCH_MOVIES_RESET})
    }

    document.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
              document.querySelector('.header').classList.add('saturate')
            } else {
              document.querySelector('.header').classList.remove('saturate')
            }
          })

    return (
        <header className="header">
            <div className="header__brand">
                <Link to='/'><img src={ Logo } className="header__brand-img" alt="logo" /></Link>
            </div>
            <ul className="header__items ">
                <li className="header__items-li">
                    <NavLink to="/top-rated-movies" exact activeClassName='header__items-a--active' className="header__items-a" onClick={ closeMenuFunc }>
                        Mas Valoradas
                    </NavLink>
                </li>
                <li className="header__items-li">
                    <NavLink to="/new-movies" exact activeClassName='header__items-a--active' className="header__items-a" onClick={ closeMenuFunc }>
                        Nuevos Ingresos
                    </NavLink>
                </li>
                <li className="header__items-li">
                    <NavLink to="/popular-movies" exact activeClassName='header__items-a--active' className="header__items-a" onClick={ closeMenuFunc }>
                        Mas Populares
                    </NavLink>
                </li>
                <li className="header__items-li" onClick={ closeMenuFunc }>
                    <NavLink to="/upcoming-movies" exact activeClassName='header__items-a--active' className="header__items-a">
                        Proximamente
                    </NavLink>
                </li>
                <li className="heaader__items-li" >
                    <SearchForm />
                </li>
            </ul>
            <div className="header__menu">
                <IoMenu className="icon icon--bars" onClick={ displayMenuFunc } />
                <IoClose className="icon icon--close" onClick={ closeMenuFunc } />
            </div>
        </header>
    )
}
