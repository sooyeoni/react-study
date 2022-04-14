import React, { useState } from 'react';
import './Test3.css'
import '../assets/css/reset.css'

const Test3 = () => {
    const [ data , setData ] = useState([
        {id:1, name:'최우식', age:20, addr:'서울',done:true },
        {id:2, name:'김다미', age:25, addr:'제주',done:true },
        {id:3, name:'김성철', age:26, addr:'울산',done:false },
        {id:4, name:'노의정', age:22, addr:'부산',done:true },
        {id:5, name:'박진주', age:28, addr:'경기',done:false },
    ])

    return (
        <div >
            <table className="list">
                <caption> 그해 우리는 출연진 </caption>
                <colgroup>
                    <col className="num" />
                    <col className="name" />
                    <col className="age" />
                    <col className="addr" />
                    <col className="consent" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의여부</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.map( (item ,index) =>  <tr key={item.id}>
                            <td> {item.id} </td>
                            <td> {item.name} </td>
                            <td>{item.age}</td>
                            <td>{item.addr}</td>
                            <td>{item.done ? '동의':'비동의'} </td>
                      </tr> )
                   }
                </tbody>
            </table>
        </div>
    );
};

export default Test3;