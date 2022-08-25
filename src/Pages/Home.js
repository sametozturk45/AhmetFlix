import React from 'react'
import useFetch from "../Functions/useFetch";
import ItemList from "../Pages/ItemList";
import {Link,useParams} from "react-router-dom"

export default function Home() {
    const {id} = useParams();
    const {data:filmDatalari,error,loading} = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=dbf1661ce16804e33b818af9c3e1a1bc&language=en-US&page="+id);
  return (
    <div>
      <h1 className="header-title">AHMETFLİX</h1>
      {error && <h2 className='text-red'>Veriler Getirilirken Hata Oluştu</h2>}
      {loading && <h2 className='text-red'>Yükleniyor...</h2>}
      {filmDatalari && <ItemList filmListesi={filmDatalari.results} />}
      <div className='page-buttons'>
        {id>1 && <Link className='page-btn' to={`/`+(id-1)}>Geri</Link>}
        <Link className='page-btn' to={`/`+(parseInt(id)+1)}>İleri</Link>
      </div>
    </div>
  )
}
