import {useNavigate} from 'react-router-dom';
import joinLogo from "../../resources/Avatars/bird_main.webp"
import imgInfoArrowText from "../../resources/info text.svg"

import WelcomeInput from "./_WelcomeInput"
import { useRef, useState } from "react";
import axios from "axios"

import "../../styles/joinPage.css"


const JoinPage = () => {
    const avatarList = ["bird_main.webp", "bird_girl.webp", "bird_glasses.webp", 
    "bird_afro.webp", "bird_french.webp", "dog.webp", "fox.webp", "ghost.webp", "bear.webp", "bee.webp", "cat.webp", "snowman.webp"];

    const loginInForm = useRef();
    const avatarRef = useRef();
    const avatarListContainer = useRef();
    const [userAvatar,setUserAvatar] = useState("bird_main.webp");
    const API_URL = "http://localhost:5040/login"

    const panelContainer = useRef();
    const navigate = useNavigate();
    
    
    const loginFormSubmit = (e) =>{
        e.preventDefault();
        const username = loginInForm.current.getElementsByTagName("input")[0];
        const password = loginInForm.current.getElementsByTagName("input")[1];

        const data ={
            username: username.value.trim(), 
            password: password.value
        }
        axios.post(API_URL, data)
            .then(res =>{
                if(res.data === "user not found") {
                    alert("User was not found. Try Again"); 
                    return;
                }
                navigate(`/chat?uid=${res.data}`);
            })
            .catch(error =>{
                console.error(error)
            })
    }

    const avatarImageClick = (e) =>{
        setUserAvatar(e.target.getAttribute("data-name"))
    }

    const avatarImageSubmit = (e) =>{
        avatarRef.current.style.backgroundImage = 'url('+require(`../../resources/Avatars/${userAvatar}`)+')';
        goToSignupPanel()
    }

    const goToSignupPanel = (e) => {
        panelContainer.current.style.transform = "translateX(-100%)";
    }

    const goToLoginPanel = (e) =>{
        panelContainer.current.style.transform = "translateX(0%)";
        setUserAvatar("bird_main.webp");
        avatarRef.current.style.backgroundImage = 'url('+require(`../../resources/Avatars/bird_main.webp`)+')';
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
                        <form ref={loginInForm} className="logInForm" > {/* onSubmit={loginFormSubmit} */}
                            <section className="logInInputSection">
                                <WelcomeInput className="usernameInput" placeholder="Username"/>
                                <WelcomeInput className="passwordInput" placeholder="Password" type="password"/>
                            </section>
                            <button className="btnWelcomeForm mouseCursorHoverPointer btnLogin" type="submit" onClick={loginFormSubmit}>Login</button>
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
                                <WelcomeInput className="" placeholder="Your Name"/>
                                <WelcomeInput className="" placeholder="Username"/>
                                <WelcomeInput className="" placeholder="Password" type="password"/>
                            </section>
                            <div className="btnWelcomeForm mouseCursorHoverPointer createProfileButton" type="submit" onClick={(e) => e.target.parentElement.submit()}>
                                Create
                            </div>
                        </form>
                    </section>
                    <section className="avatarPanel">
                        <section ref={avatarListContainer} className="avatarGridContainer">
                            {avatarList.map((avatarName,key) =>{
                                return <div key={key} className={`mouseCursorHoverPointer ${userAvatar === avatarName ?"avatarSelected":""}`} onClick={avatarImageClick} data-name={avatarName} 
                                style={{backgroundImage:'url('+require(`../../resources/Avatars/${avatarName}`)+')'}}/>
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