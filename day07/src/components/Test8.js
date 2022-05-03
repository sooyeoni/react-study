import React, { useState } from 'react';
import styled from 'styled-components'

const Container  = styled.div`
    border:1px solid #000; padding:25px; margin:20px auto;
    width: ${ props => props.size };
    text-align: center;
    h2 {  font-size:40px; }
`
const Button  = styled.button`
    font-size:50px; margin:5px;
    padding:0 30px 25px;
    border:none; cursor: pointer;

    &.up::after {content:"📤"}
    &.down::after {content:"📥"}

    &:hover {
        background:tomato;
    }

    &:disabled {
        filter: grayscale(100%);
        background: #333;
        cursor: not-allowed;
    }
`


const Test8 = () => {
    const [count ,setCount ] = useState(1)
    const [min ,setMin ] = useState(0)
    const [max ,setMax ] = useState(10)

    const increment  = ()  => {
        setCount( count > max ? max : count + 1 )
    }
    const decrement  = ()  => {
        setCount( count < min ? min : count -1  )
    }

    return (
        <Container size="300px">
            <h2>카운트: { count } </h2>
            
            <Button onClick={increment} className="up" disabled={ count === max }> </Button>
            <Button onClick={decrement} className="down" disabled={ count === min }>  </Button>
        </Container>
    );
};

export default Test8;