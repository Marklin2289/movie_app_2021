import React from 'react';
import "./Movie.css";

export default function Movies({ year, title, summary, poster, genres}) {
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map((genre,idx)=> <li key={idx} className="genres__genre">{genre}</li>)}</ul>
                <p className="movie__summary">{summary.slice(0,180)}. . .</p>

            </div>
        </div>
    )
};
