import React , { useContext }from 'react';
import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {
    const { color , onRed, onPink, onGreen, onBlue } = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color} </h1>
            <p>
                <button onClick={ () => onRed() }>red</button>
                <button onClick={ () => onGreen() }>green</button>
                <button onClick={ () => onBlue() }>blue</button>
                <button onClick={ () => onPink() }>pink</button>
            </p>
        </div>
    );
};

export default Color;