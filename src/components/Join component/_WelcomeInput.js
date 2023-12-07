import { useState, useRef } from "react";

const WelcomeInputButton = ({placeholder, className, type, tabIndex}) =>{

    const inputSectionElm = useRef();
    const inputRef = useRef();
    const [inputType, setInputType] = useState(type);

    const unselect = (e) =>{
        inputSectionElm.current.setAttribute("data-selected", "false");
    }

    const select = (e) =>{
        inputSectionElm.current.setAttribute("data-selected", "true");
    }

    const inputChange = (e) =>{
        if(e.target.value)
            inputSectionElm.current.setAttribute("data-div-holder", "true");
        else
            inputSectionElm.current.setAttribute("data-div-holder", "false");
    }

    return(
        <section data-selected="false" data-div-holder="false" ref={inputSectionElm} className={`customWelcomeInputSection ${className}`}>
            <div className="inputPlaceHolder">{placeholder}</div>
            <input maxLength={20} ref={inputRef} type={inputType} onBlur={unselect} onFocus={select} onChange={inputChange} tabIndex={tabIndex}/>
            {type === "password"? 
            <div onClick={(e) => {inputType === "password"?setInputType("text"):setInputType("password")}} className="showHideBtn mouseCursorHoverPointer">
                {inputType === "password"?"SHOW":"HIDE"} 
            </div>
            : null} 
        </section>
    )
}

export default WelcomeInputButton;