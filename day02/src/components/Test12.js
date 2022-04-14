import { useState } from 'react';

const Test12 = () => {
    const [ visible  , setVisible ] = useState(false)

    const onShow  = ()  => {
        setVisible( true )
    }
    const onHide  = ()  => {
        setVisible( false )
    }
    const onToggle  = ()  => {
        setVisible( !visible )
        //!true -> false  , !false -> true !not
    }

    return (
        <>
            <button onClick={ onShow }>보이기</button>   
            <button onClick={ onHide }>숨기기</button>   
            <button onClick={ onToggle }>
                {
                    visible ? '숨기기':'보이기'
                }
            </button>   
   <hr/>
   {
       visible === true ? 
       <div style={{width:300, height:100, margin:20, backgroundColor:'hotpink'}}>
       </div> : null 
   }
   <hr/>
   {
       visible &&  <div style={{width:300, height:100, margin:20, backgroundColor:'hotpink'}}></div>
   }
            
        </>
    );
};

export default Test12;