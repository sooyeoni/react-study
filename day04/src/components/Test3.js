import React, { useRef, useState } from 'react';

const Test3 = () => {
    const idRef = useRef( null )

    const [ form , setForm ] = useState({
        userid :'' ,
        userpw:'' ,
        userEmail:''
    })   
    //form.userid , form.userpw  
    //비구조할당 
    const { userid , userpw , userEmail  } = form 

    const changeInput= (e) => {
        const { value , name } = e.target 
        setForm({
            ...form, 
            [name]: value 
        })
    }   
    const onReset  = ()  => {
        setForm({
            userid :'' ,
            userpw:'' ,
            userEmail:''
        })
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" value={userid} name="userid" onChange={ changeInput } ref={ idRef } />
            <input type="text" value={userpw} name="userpw" onChange={ changeInput } />
            <input type="text" value={userEmail} name="userEmail" onChange={ changeInput} />
            <button onClick={ onReset }>초기화</button>
            <hr/>
            <h3>아이디:{ userid } </h3>
            <h3>비번:{ userpw } </h3>
            <h3>이메일:{ userEmail } </h3>
        </div>
    );
};

export default Test3;