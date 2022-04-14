import React, { useState } from 'react';
import Test2Ani from './Test2Ani';
import Test2Dis from './Test2Dis';
import Test2Name from './Test2Name';

const Test2 = () => {
    const [ text , setText ] = useState('홍길동')
    const [ ani, setAni ] = useState('고양이')

    const onText = ( e ) => {
        setText(e.target.value)
    }
    const onAni  = (e) => {
        const { value } = e.target 
        setAni( value )
    }

    return (
        <div>
            <Test2Name text={text} onText={onText} />
            <hr/>
            <Test2Ani ani={ani} onAni={onAni} />
            <hr/>
            <Test2Dis text={text} ani={ani} />
        </div>
    );
};

export default Test2;