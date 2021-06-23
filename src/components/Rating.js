import React from 'react'
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5'

export const Rating = ({movie}) => {
    return (
        <span className="rating">
            {
                movie.vote_average >= 1
                ? <IoStar />
                : movie.vote_average >= 0.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 2
                ? <IoStar />
                : movie.vote_average >= 1.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 3
                ? <IoStar />
                : movie.vote_average >= 2.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 4
                ? <IoStar />
                : movie.vote_average >= 3.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 5
                ? <IoStar />
                : movie.vote_average >= 4.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 6
                ? <IoStar />
                : movie.vote_average >= 5.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 7
                ? <IoStar />
                : movie.vote_average >= 6.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 8
                ? <IoStar />
                : movie.vote_average >= 7.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 9
                ? <IoStar />
                : movie.vote_average >= 8.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
            {
                movie.vote_average >= 10
                ? <IoStar />
                : movie.vote_average >= 9.5
                ? <IoStarHalf />
                : <IoStarOutline />
            }
        </span>
    )
}
