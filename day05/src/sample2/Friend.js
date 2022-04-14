import React, { useReducer, useRef, useState } from 'react';
import FriendList from './FriendList';
import dataList from '../assets/api/friendData'
import './style.css'
import FriendInput from './FriendInput';

const Friend = () => {
    const no = useRef( dataList.length + 1 )
    const [ data , setData ] = useState( dataList )
    const [ ischk , setIschk ] = useState( false )

    //삭제
    const onDel = ( id )  => {
        setData( data.filter( item => item.id !== id  ))
    }    
    //모두 삭제 
    const onRemove = ()  => {
        setData([])
    }

    //초구복구
    const onRestore = ()  => {
        setData( dataList )
    }
    
    //추가
    const onAdd  = ( form )  => {
        form.id  = no.current++
        setData([
            ...data,
            form 
        ])
    }

    return (
        <div className="wrap">
            <h1> 친구들 총인원 : {data.length}</h1>
            <p className="chk">
                <input type="checkbox" checked={ischk} 
                       onChange={ e => setIschk(e.target.checked)} />
                {
                    ischk ? '추가 비활성':'추가 활성'
                }
            </p>
            <FriendList data={data} onDel={onDel} />
            <p className="btn">
                <button onClick={ onRemove }>모두삭제</button>
                <button onClick={ onRestore }>초기복구</button>
            </p>

            {
                // ischk ? <FriendInput /> :null
                ischk && <FriendInput onAdd={onAdd} />       
            }
            

        </div>
    );
};

export default Friend;