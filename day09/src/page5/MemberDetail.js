import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

const MemberDetail = () => {
    const { memberID } = useParams() 
    const { data } = useAxios(`https://jsonplaceholder.typicode.com/users/${memberID}`)
    const navigate  = useNavigate()   
    const { name , email , phone , website } = data 

    const css = {
        border:'1px solid hotpink', margin:20, padding:20 
    }
    const onGo = ()  => {
        navigate('/')
        // navigate(-1) 이전 한단계 -2 , 1 , 2 
    }
    return (
        <div style={ css }>
             <h2> MemberDetail Page : { memberID } </h2>
             <h3> 이름  : { name } </h3>
             <ul>
                 <li>이메일 :{email} </li>
                 <li>전화번호 :{phone} </li>
                 <li>웹사이트 :{website} </li>
             </ul>
             <button onClick={ onGo }>이전/목록으로</button>
        </div>
    );
};

export default MemberDetail;