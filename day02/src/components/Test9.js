const Test9 = () => {
    const title='신상명세서'
    const arr = ['김다미','김태리','최우식','김진주','유재석']
    const data = [
        {id:1, name:'김다미'},
        {id:2, name:'김태리'},
        {id:3, name:'최우식'},
        {id:4, name:'김진주'},
        {id:5, name:'유재석'},
    ]
    return (
        <div>
            <h2> {title} </h2>
            <ul>
                {
                    arr.map( ( item , index) => {
                        return ( <li key={index}> {index} / { item } </li> )
                    })
                }
            </ul>
            <hr/> 
            <ul>
                {
                    arr.map( (item,index) => <li key={index}> {index} / {item } </li> )
                }
            </ul>
            <hr/>
            <ul>
                {data.map( (item, index) => {
                    return (<li key={item.id}> {item.id} / { item.name } </li>)
                })}
            </ul>
            <hr/>
            {
                data.map( (item, index) => <li key={item.id}> {item.id}/{item.name} </li>)
            }
        </div>
    );
};

export default Test9;
/*
arr.map(callback(currentValue , index) )
Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.
react에서는 key 권장사항 
고유성 ,고유값  - 주민번호 처럼 
key 중복값을 쓰면 안된다 

Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 대부분의 경우 데이터의 ID를 key로 사용
*/