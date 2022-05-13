import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = ( url ) => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState(false)
    const [ error , setError ] = useState(null)

    useEffect( () => {
        axios.get(url)
             .then( res => {
                setData( res.data )
                setError( null )
                setLoading( true )
             })        
            .catch( error => {
                setError( error )
                setData([])
                setLoading( false )
            })
    },[url])

    return  { data , error , loading }
};

 