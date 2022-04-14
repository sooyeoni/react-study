import React, { useState }  from 'react';
import './Test5.css'

const Test5 = () => {
    const [ isColor , setIsColor ] = useState( false )
    const [ age , setAge ] = useState(21)

    //증가
    const onAge = ()  => {
        setAge( age + 1 )
    }
    //감소  - 인라인 형식으로 작성 

    //토글  - ! not !true -> false , !false  -> true 
    const onToggle  = () => {
        setIsColor( !isColor )
    }

    return (
        <div className={`wrap ${isColor ? 'pink':'tomato'}`}>
            <h2>backgroundColor : { isColor ? 'pink':'tomato'} </h2>
            <h2>나이 : {age} </h2>
            <p>
                <button onClick={ onToggle }>배경바꾸기:true/false  </button>
                <button onClick={ onAge }>증가</button>
                <button onClick={ ()  => setAge( age - 1 ) }>감소</button>
            </p>
        </div>
    );
};

export default Test5;