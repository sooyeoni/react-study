import { useState } from 'react'

const Test11 = () => {
    const [ bgColor , setBgColor] = useState('hotpink')

    const onColor  = ()  => {
        setBgColor( bgColor ==='hotpink' ? 'skyblue':'hotpink' )
    }

    return (
        <>
            <h3> h1을 클릭하면 배경색이 hotpink - skyblue 왕복 </h3>   
            <h1 style={{ marign:10, padding:40, backgroundColor: bgColor, cursor:'pointer'}}
            onClick = { onColor }
            >
                backgroundColor : { bgColor }
            </h1>
        </> 
    );
};

export default Test11;