/*
const Sub = ( props ) => {
    // props = { name: xxx , age:xxx }
    return (
        <div>
            <h2> 자식 컴포넌트 </h2>
            <h3> 이름 : { props.name} / ({typeof props.name}) </h3>
            <h3> 나이 : { props.age } / ({typeof props.age }) </h3>
            <hr />
        </div>
    );
};
*/

const Sub = ( { name , age } ) => {
    //const { name , age } = props 
    
    return (
        <div>
            <h2> 자식 컴포넌트 </h2>
            <h3> 이름 : { name} / ({typeof name}) </h3>
            <h3> 나이 : { age } / ({typeof age }) </h3>
            <hr />
        </div>
    );
};

const Test6 = () => {
    const data1 ={ name:'강아지' , age:3 }
    const data2 ={ name:'고양이' , age:2 }

    return (
        <>
            <h2> props 설명 </h2>   
            <Sub name="홍길동" age="20" />
            <Sub name="김다미" age={23} />
            <Sub name = {data1.name} age={data1.age} />
            <Sub name = {data2.name} age={data2.age} />
            <Sub { ...data1 } />
            <Sub { ...data2 }/>
            {/* 
                부모 컴포넌트에서자식 컴포넌트에 값을 전달할때 
                자식 컴포넌트에서 부모의 값을 받아올때 
                자식에서 부모에 값을 콜백으로 전달할때 

                <자식컴포넌트 props명 = 전달값 />
                값 : 숫자, 문자, 논리  - {숫자} , {논리값}
                
                실제로는 state, setState, 함수등을 전달한다 = {state}

                props명은 일반적으로 변수처럼 생각하자 
                전달하는 값을 담는 변수 ( 한글 ,영문 , 숫자 )
            */}
        </>
    );
};

export default Test6;