import React from 'react'

export const Iframe = ({videos}) => {
    console.log(videos.results);
    return (
        <div className="trailer-box">
            {
                videos.results?.map( vid => (
                    vid.site === 'YouTube'
                    ? <iframe width="560" className='trailer' height="315" src={`https://www.youtube.com/embed/${vid.key}`} title={vid.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    : <iframe title={vid.title} className='trailer' src={`https://player.vimeo.com/video/${vid.key}?title=0&byline=0&portrait=0`} width="560" height="315" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                ))[0]
            }
        </div>
    )
}
