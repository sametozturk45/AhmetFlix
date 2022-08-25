import {useParams} from 'react-router-dom';
import useFetch from '../Functions/useFetch';

const ItemDetails = () => {
    const {id} = useParams();
    const {data,error,loading} = useFetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=dbf1661ce16804e33b818af9c3e1a1bc&language=en-US");
    return ( 
        <div className='film-detail'>
            {loading && <h2>Veriler Yükleniyor...</h2>}
            {error && <h2>Verileri getirirken bir hata oluştu</h2>}
            {data && (
                    <div className='film-detail-container' key={data.id}>
                        <div className="film-banner">
                            <h2>{data.original_title}</h2>
                            <h5 color="#ddd">{data.release_date}</h5>
                            {data.adult && <h5 className='text-red'>ADULT</h5>}
                            {!data.adult && <h5 className='text-success'>NON-ADULT</h5>}
                            <h4>{data.overview}</h4>
                        </div>
                        <img className='film-poster' src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                    </div>
                )}
        </div>
     );
}
 
export default ItemDetails;