import React, { useState } from 'react';
import Test13Modal from './Test13Modal';
import '../assets/css/reset.css'
import './Test13.css'

const Test13 = () => {
    const [ isOpen  , setIsOpen] = useState( false )
    const onOpen = ()  => { 
        setIsOpen( true )
     }
     const onClose = ()  => {
         setIsOpen( false )
     }
    return (
        <div>
            <button onClick={ onOpen }> 팝업 띄우기 </button>
            {
                isOpen && <Test13Modal  onClose={onClose} />
            }            
        </div>
    );
};

export default Test13;