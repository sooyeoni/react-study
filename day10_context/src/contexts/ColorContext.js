import React ,{createContext, useState} from 'react';
export const ColorContext = createContext()

const ColorProvider = ( props ) => {
    const [ color , setColor ] = useState('orange')

    const onRed  = ()  => { setColor('red')}
    const onGreen  = ()  => { setColor('green')}
    const onBlue  = ()  => { setColor('blue')}
    const onPink  = ()  => { setColor('pink')}

    return (
        <ColorContext.Provider value={{ color , onRed, onPink, onGreen, onBlue }}>
            { props.children }
        </ColorContext.Provider>
    );
};
export default ColorProvider;