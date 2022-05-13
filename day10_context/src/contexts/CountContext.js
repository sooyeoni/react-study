import React ,{ createContext, useState } from 'react';

export const CountContext = createContext()
const CountProvider = ( props  ) => {
    // state , 함수등 모든 처리 
    const [ count , setCount ] =useState(0)

    const increment  = ()  => {
        setCount( count + 1 )
    }
    const decrement  = ()  => {
        setCount( count - 1 )
    }

    return (
        <CountContext.Provider value={{ count , increment , decrement }}>
            { props.children }
            {/* <Count /> */}
        </CountContext.Provider>
    );
};

export default CountProvider;