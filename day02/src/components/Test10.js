import { useState } from 'react';

const Test10 = () => {
    const [name , setName]  = useState('아무개')
    const [color, setColor] = useState('lime')
    const [age, setAge] = useState(5)

    const onName1 = ()  => {
        setName( '김태리' )
    }
    const onName2 = ()  => {
        setName( '김다미')
    }
    const onName3 = ()  => {
        setName( '최우식')
    }

    const onColor1 = ()  => {
        setColor('hotpink')
    }
    const onColor2 = ()  => {
        setColor('skyblue')
    }
    const onColor3 = ()  => {
        setColor('tomato')
    }

  

    return (
        <div>
            <h2 style={{backgroundColor: color }}> 
                이름 : {name}  ,
                나이 : {age}살,
                컬러 : {color} 
            </h2>
            <p>
                <button onClick={ onName1 }>김태리</button>
                <button onClick={ onName2 }>김다미</button>
                <button onClick={ onName3 }>최우식</button>
            </p>
            <p>
                <button onClick={ onColor1}>hotpink</button>
                <button onClick={ onColor2}>skyblue</button>
                <button onClick={ onColor3}>tomato</button>
            </p>
            <p>
                <button onClick={ () => setAge(20) }>20살</button>
                <button onClick={ () => setAge(30) }>30살</button>
                <button onClick={ () => setAge(10) }>10살</button>
            </p>
        </div>
    );
};

export default Test10;

/*
Hook은 React 16.8버전에 새로 추가되었습니다. 
Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다.


함수형 컴포넌트는 
렌더링할때마다 내부의 것들을 기억하지 못한다 
다시 생성 초기화 한다 ( 변수 , 함수등 )

내부의 것들을 유지하기 위해서 hook이 등장  - useXXX

useState  : 값이 유동으로 변할때 
자바스크립트에서는 이름변경할때 
let name ="홍길동"
name ="유재석"

const [변수, 함수] = React.useState(초기값);
변수 = 초기값 
함수( 값, 수식  ) => 연결되어 있는 변수의 값이 변경이된다 

const [상태데이터, 상태데이터의값을변경해주는함수] = React.useState(초기값);
초기값 : 숫자, 문자, [] , {} , 논리값등 

const [ A, B ] = useState(100)
A = 100
B(200) => A = 200 

const [상태데이터  , setter 함수 ] = useState(초기값)
const [ name , setName ] = useState(초기값)
const [ count, setCount ] = useState(0);
const [ count, set첫글자대문 ] = useState(0);
암묵적으로 선언한다 
const [ aaa , setAaa ] = useState(0);
*/