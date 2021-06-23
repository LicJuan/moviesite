import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/MoviesActions';

export const SearchForm = () => {
    const dispatch = useDispatch()
    const [q, setQ] = useState('');
    const movieSearchHandler = (e) => {
        e.preventDefault()
        dispatch( searchMovies(q) )
        setQ('')
        document.querySelector('.header__items').classList.remove('header__items--active')
        document.querySelector('.icon--bars').style.display = 'block'
        document.querySelector('.icon--close').style.display = 'none'
    }
    return (
        <form className="header__items-form" onSubmit={ movieSearchHandler }>
            <div className="form-group">
                <input
                    type="text"
                    name="q"
                    autoComplete="off"
                    value={q}
                    onChange={ (e)=> setQ(e.target.value) }
                    className="header__input"
                    placeholder="Buscar Pelicula..." />
                <IoSearch className="header__input-icon" />
            </div>
        </form>
    )
}
