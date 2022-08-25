import React from 'react'
import { Link } from 'react-router-dom';

export default function ItemList(props) {
    let filmler = props.filmListesi;
  return (
    <div className='film-container'>
        {
            filmler.map((film)=>(
                <Link to={`/itemDetail/${film.id}`}>
                    <div className='film-item' key={film.id} style={{
                        backgroundImage:`url("https://image.tmdb.org/t/p/original${film.poster_path}`
                    }}>
                        <h4 className='film-ad'>{film.original_title}</h4>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}
