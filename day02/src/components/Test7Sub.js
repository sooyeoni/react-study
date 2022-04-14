
import PropTypes from 'prop-types';

const Test7Sub = ( {name, age, addr, tel, color, bgColor, done} ) => {
    //보더 color 수정  - 템플릿리터널 
    return (
        <div style={{width:350, border:`3px solid ${color}`, margin:20, padding:15, backgroundColor: bgColor }}>
            <h2> {name} 신상명세서 </h2>
            <ul>
                <li>나이 : {age }</li>
                <li>주소 : {addr} </li>
                <li>전화 : {tel} </li>
                <li>보더컬러 :{ color } </li>
                <li>배경컬러 :{ bgColor } </li>
                <li>동의여부 :{ done ? '동의':'비동의'} </li>
            </ul>
        </div>
    );
};

Test7Sub.propTypes = {
    name: PropTypes.string.isRequired, 
    age: PropTypes.number.isRequired, 
    addr: PropTypes.string, 
    tel: PropTypes.string, 
    done: PropTypes.bool,
    color: PropTypes.string,
    bgColor: PropTypes.string
};

Test7Sub.defaultProps = {
    name: '아무개', 
    age: 20, 
    addr: '서울', 
    tel: '010-0000-0000', 
    done: false,
    color: 'lime',
    bgColor: 'yellow'
 };

export default Test7Sub;

/*
PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다. 아래 예시에서는 PropTypes.string을 사용하게 될 것입니다. prop에 유효하지 않은 값이 전달 되었을 때, 경고문이 JavaScript 콘솔을 통해 보일 것입니다. propTypes는 성능상의 이유로 개발 모드(Development mode) 에서만 확인될 것입니다.


컴포넌트 props의 필수 여부를 지정하거나 props의 Datatype을 지정할때 사용 
규칙에 맞지 않으면 warning 메세지 출력 - 개발모드

import PropTypes from 'prop-types';
해당컴포넌트명.propTypes = {
  props명: PropTypes.타입,
  props명: PropTypes.타입.isRequired
  props명: PropTypes.타입.필수여부
};


초기 Prop 값
defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.

// props의 초깃값을 정의합니다.
해당컴포넌트.defaultProps = {
  props명: '값'
};
*/