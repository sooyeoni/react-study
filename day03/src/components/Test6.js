import React, { useRef, useState } from 'react';

const Test6 = () => {
    const idRef = useRef(null)
    const [ userid , setUserid ] = useState('')
    const [ userpw, setUserpw  ] = useState('')

    //event , evt  ,e 
    const changeInput1 = ( e )  => {
        // setUserid( e.target.value )
        const { value } = e.target 
        setUserid( value )
    }
    const changeInput2 = (e)  => {
        // setUserpw( e.target.value )
        const { value } = e.target 
        setUserpw( value)
    }
    const onReset = () => {
        setUserid('' )    
        setUserpw('' )    
        idRef.current.focus()
    }
    return (
        <div>
            <input type="text" onChange={ changeInput1 } value={ userid } ref={idRef} />
            <input type="text" onChange={ changeInput2 } value={ userpw } />
            <button onClick={ onReset }>초기화</button>
            <h2>
                id : { userid } /   pw : { userpw }
            </h2>
        </div>
    );
};

export default Test6;