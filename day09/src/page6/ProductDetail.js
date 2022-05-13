import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data'

const ProductDetail = () => {
    const { productID } = useParams()
    const navigate = useNavigate()

    const item  = data.find( item => item.id === productID )

    const onGo  = ()  => {
        navigate(-1)
    }
    const onHome  = ()  => {
        navigate('/')
    }

    return (
        <div className="item">
            <h2>운동화 상페페이지</h2>
            <h3> 제품명 {item.name} : 가격 {item.price} </h3>
            <p><img src={item.photo} alt={item.name} /></p>
            <p>제품설명 : {item.description} </p>
            <button onClick={ onHome }> 첫페이지 </button>
            <button onClick={ onGo }> 제품목록보기 </button>
        </div>
    );
};

export default ProductDetail;