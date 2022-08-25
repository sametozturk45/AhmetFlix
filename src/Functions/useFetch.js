import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);
        const [error, setError] = useState(null);
        const [loading,setLoading] = useState(true);
        useEffect(()=>{
            fetch(url).then(res=>{
            if(!res.ok) throw Error("Verileri çekerken bir hata ile karşılaştık");
            return res.json();
        }).then(data=>{
            setData(data);
            setLoading(false);
        }).catch(err=>{
            setLoading(false);
            setError(err.message);
        });
        },[url]);
    return {data,error,loading}
}
 
export default useFetch;