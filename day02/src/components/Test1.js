
const Test1 = () => {
    return (
        <>
            <h1> JSX 영역 </h1>
            <h2> 한줄 이상은 div, Fragment , section , article 등등</h2>
            <p> 빈태그 반드시 맨뒤에 /  </p>
            <img />
            <input />
            {/* 주석  */}
            <h3 
                //한줄 설명 
                /*
                    여러줄 설명
                */
            >
                내용
            </h3>
        </>
    );
};

export default Test1;

/*
    - es6기반  ( Array , string - 메서드 )
    - react - 선언형 
      js - 절차형 

      virtual dom : 가상돔 
      DOM을 추상화한 가상의 객체를 메모리에 만들어 놓는것 


*/