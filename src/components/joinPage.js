import joinLogo from "../resources/Avatars/bird_main.webp"
import imgInfoArrowText from "../resources/info text.svg"

import WelcomeInput from "./_WelcomeInput"
import { useRef, useState } from "react";


import "../styles/joinPage.css"


const JoinPage = () => {

    const avatarList = ["bird_main.webp", "bird_girl.webp", "bird_glasses.webp", 
    "bird_afro.webp", "bird_french.webp", "dog.webp", "fox.webp", "ghost.webp", "bear.webp", "bee.webp", "cat.webp", "snowman.webp"];

    const loginInForm = useRef();
    const avatarRef = useRef();
    const avatarListContainer = useRef();
    const [userAvatar,setUserAvatar] = useState("bird_main.webp");

    const panelContainer = useRef();

    const formSubmit = (e) => {
        e.preventDefault();
        alert("login form submited");
    }

    const avatarImageClick = (e) =>{
        setUserAvatar(e.target.getAttribute("data-name"))
    }

    const avatarImageSubmit = (e) =>{
        avatarRef.current.style.backgroundImage = 'url('+require(`../resources/Avatars/${userAvatar}`)+')';
        goToSignupPanel()
    }

    const goToSignupPanel = (e) => {
        panelContainer.current.style.transform = "translateX(-100%)";
    }

    const goToLoginPanel = (e) =>{
        panelContainer.current.style.transform = "translateX(0%)";
        setUserAvatar("bird_main.webp");
        avatarRef.current.style.backgroundImage = 'url('+require(`../resources/Avatars/bird_main.webp`)+')';
    }

    const goToAvatarPanel = (e) =>{
        panelContainer.current.style.transform = "translateX(-200%)";
    }


    return (
        <>
            <section className="welcomeBg">
                <section ref={panelContainer} className="panelContainer">
                    <section className="logInPanel">
                        <img src={joinLogo} loading="lazy" className="MainLogo" alt="Main Logo"/>
                        <div className="welcomeTitle signInTitle">Welcome to PigeonChat</div>
                        <form ref={loginInForm} className="logInForm" onSubmit={formSubmit}>
                            <section className="logInInputSection">
                                <WelcomeInput tabIndex="1" className="usernameInput" placeholder="Username"/>
                                <WelcomeInput tabIndex="2" className="passwordInput" placeholder="Password" type="password"/>
                            </section>
                            <div tabIndex="3" className="btnWelcomeForm mouseCursorHoverPointer btnLogin" type="submit" onClick={(e) => e.target.parentElement.submit()}>Login</div>
                        </form>
                        <section className="signUpTxt">Don't have an account?<p onClick={goToSignupPanel} className="mouseCursorHoverPointer"> Sign Up</p></section>
                    </section>
                    <section className="signUpPanel">
                        <header className="signUpHeader">
                            <div onClick={goToLoginPanel} className="btnBack2login">Back to Login</div>
                            <section className="subSignupHeader" onClick={goToAvatarPanel}>
                                <section className="profilePicContainer">
                                    <div className="avatarImgSignup" ref={avatarRef} />
                                    
                                    <div className="imgPen"/>
                                    <img loading="lazy" className="infoTextImg" alt="infotext" src={imgInfoArrowText}/>
                                </section>
                            </section>
                        </header>

                        <div className="welcomeTitle signup">Make Your Own Account</div>
                        <form className="signupForm">
                            <section className="signupInputSection">
                                <WelcomeInput tabindex="1" className="" placeholder="Your Name"/>
                                <WelcomeInput tabindex="2" className="" placeholder="Username"/>
                                <WelcomeInput tabindex="3" className="" placeholder="Password" type="password"/>
                            </section>
                            <div tabIndex="4" className="btnWelcomeForm mouseCursorHoverPointer createProfileButton" type="submit" onClick={(e) => e.target.parentElement.submit()}>
                                Create
                            </div>
                        </form>
                    </section>
                    <section className="avatarPanel">
                        <section ref={avatarListContainer} className="avatarGridContainer">
                            {avatarList.map((avatarName,key) =>{
                                return <div key={key} className={`mouseCursorHoverPointer ${userAvatar === avatarName ?"avatarSelected":""}`} onClick={avatarImageClick} data-name={avatarName} 
                                style={{backgroundImage:'url('+require(`../resources/Avatars/${avatarName}`)+')'}}/>
                            })}
                        </section>
                        <div className="mouseCursorHoverPointer avatarSelectButton" onClick={avatarImageSubmit}></div>
                    </section>
                </section>
            </section>
        </>
    )
}
// ✔
export default JoinPage;