const Test13Modal = ({ onClose }) => {    
    return (
        <>
            <div className="bg"></div>   
            <div className="popup">
                <p className="closex" onClick={ onClose }>X</p>
                <h2>팝업 띄우기</h2>
            </div>
        </>
    );
};

export default Test13Modal;