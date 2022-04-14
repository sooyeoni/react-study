import Test7Sub from "./Test7Sub";

const Test7 = () => {
    return (
        <div>
            <Test7Sub 
                name="김태리"
                age = { 19 }
                addr = "서울"
                tel = "010-0000-1111"
                done = { true }
                color ="tomato"
                bgColor = "pink"
            />
            <hr />
            <Test7Sub 
                name="김다미"
                addr ="제주"
                color ="skyblue"
                bgColor ="hotpink"            
            />
            <hr />
            <Test7Sub />            
        </div>
    );
};

export default Test7;