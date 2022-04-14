import React, { useState } from 'react';

const Test5 = () => {
    const datalist  = [
        {id:1, name:'김태리'},
        {id:2, name:'김다미'},
        {id:3, name:'최우식'},
        {id:4, name:'김진주'},
        {id:5, name:'김도윤'},
    ]
    const [ data  , setData ] = useState( datalist )

    const onDel1  = ()  => {
        setData( data.filter( item => item.name !== '김진주') )
    }
    const onDel2  = ()  => {
        setData( data.filter( item => item.id !== 3 ))
    }
    const onDel3  = ( num )  => {
        // alert( num )
        setData( data.filter( item => item.id !== num ))
    }
    const onAdd1  = ()  => {
        setData( data.concat({id:6, name:'유재석'}))
    }
    const onAdd2  = ()  => {
        setData([
            ...data, 
            {
                id:7, 
                name:'김혜수'
            }
        ])
    }
    const onAdd3  = (name)  => {
        setData([
            ...data ,
            {
                id: 8 ,
                name 
                // name: name 
            }
        ] )
    }

    const onMod1 = ()  => {
        setData( data.map( item => {
            if( item.id === 5 ) {
                return {
                    ...item , 
                    name:'송혜교'    
                }
            }else{
                return item 
            }
        }))
    }
    const onMod2 = ()  => {
        setData( data.map( item => item.id===4 ? {...item , name:'전지현'}: item ))
    }
    const onMod3 = (id)  => {
        setData( data.map( item => item.id === id ? { ...item , name:'김철수'}: item ))
    }

    return (
        <div>
            <p>
                <button onClick={ onDel1 }>삭제</button>
                <button onClick={ onDel2 }>삭제</button>
                <button onClick={ () => onDel3(1) }>1삭제</button>
                <button onClick={ () => onDel3(4) }>4삭제</button>
            </p>
            <p>
                <button onClick={ onAdd1 }>추가</button>
                <button onClick={ onAdd2 }>추가</button>
                <button onClick={() => onAdd3('홍길동') }>추가</button>                
            </p>
            <p>
                <button onClick={ onMod1 }>수정</button>
                <button onClick={ onMod2 }>수정</button>
                <button onClick={() => onMod3(1) }>수정</button>                
            </p>
            <hr/>
            <ul>
                {
                    data.map( (item, index) => <li key={item.id}>
                        {item.id} / { item.name} 
                    </li>)
                }
            </ul>
            
        </div>
    );
};

export default Test5;