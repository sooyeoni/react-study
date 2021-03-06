import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const Todos = () => {
    const no = useRef(1)
    const [ data , setData ] = useState([])
    // {id:1, text:'xxxx' , ischk:false }

    //삭제 
    const onDel = (id) => {
        setData( data.filter( item  => item.id !== id ))
    }
    //추가
    const onAdd  = ( text )  => {
        setData([
            ...data , 
            {
                id: no.current++,
                text: text ,
                ischk:false 
            }
        ])
    }

    //체크 
    const onToggle  = ( id ) => {
        setData( data.map( item => item.id === id ? {...item , ischk:!item.ischk } : item ))
    }

    return (
        <div className="Todos">
            <h1> TodoList </h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={ data } onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;