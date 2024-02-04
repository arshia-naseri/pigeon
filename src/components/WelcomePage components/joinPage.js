import {useNavigate} from 'react-router-dom';
import joinLogo from "../../resources/Avatars/bird_main.webp"
import imgInfoArrowText from "../../resources/info text.svg"

import WelcomeInput from "./_WelcomeInput"
import { useRef, useState, useEffect } from "react";
import {io} from 'socket.io-client';
import axios from "axios"
import "../../styles/joinPage.css"




const JoinPage = () => {
    const avatarList = ["bird_main.webp", "bird_girl.webp", "bird_glasses.webp", 
    "bird_afro.webp", "bird_french.webp", "dog.webp", "fox.webp", "ghost.webp", "bear.webp", "bee.webp", "cat.webp", "snowman.webp"];

    const loginInForm = useRef();
    const signUpForm = useRef();
    const avatarRef = useRef();
    const avatarListContainer = useRef();
    const [isLoading, setIsLoading] = useState(false)
    const [userAvatar,setUserAvatar] = useState("bird_main.webp");
    const LOGIN_API_URL = process.env.REACT_APP_LOGIN_API_URL;
    const SIGNUP_API_URL = process.env.REACT_APP_SIGNUP_API_URL;

    const panelContainer = useRef();
    const navigate = useNavigate();
    
    useEffect(()=>{
        // Fake server requests to wake up servers from hibernation 
        fetch(process.env.REACT_APP_WAKEUP_URL);
        io(process.env.REACT_APP_SOCKET_SERVER);
    },[])
    const loginFormSubmit = (e) =>{
        setIsLoading(true);
        e.preventDefault();
        
        const username = loginInForm.current.getElementsByTagName("input")[0];
        const password = loginInForm.current.getElementsByTagName("input")[1];
        e.target.disabled = true
        const data ={
            username: username.value.trim(), 
            password: password.value
        }
        axios.post(LOGIN_API_URL, data)
            .then(res =>{
                const dataType = res.data.substring(0, 2);
                if(dataType === "m-") {
                    alert(res.data.slice(2));
                    setIsLoading(false);
                    e.target.disabled = false
                    return;
                }
                
                setIsLoading(false);
                e.target.disabled = false
                navigate(`/chat?uid=${res.data}`);
            })
            .catch(error =>{
                console.error(error)
                setIsLoading(false);
                e.target.disabled = false
            })
        
        
    }

    const signupFormSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        
        const inputs = signUpForm.current.getElementsByTagName("input");
        const name = inputs[0];
        const username = inputs[1];
        const password = inputs[2];
        

        const data = {
            avatarPic: userAvatar,
            name: name.value.trim(),
            username: username.value.trim(),
            password: password.value.trim()
        }

        if(data.name.length < 1){ alert("Name was not entered"); return; }
        if(data.username.length < 1){ alert("Username was not entered"); return }
        if(data.password.length < 1){ alert("Password was not entered"); return; }
        e.target.disabled = true
        axios.post(SIGNUP_API_URL, data)
            .then(res =>{
                const dataType = res.data.substring(0, 2);
                if(dataType === "m-") {
                    alert(res.data.slice(2)); 
                    setIsLoading(false);
                    e.target.disabled = false;
                    return;
                }
                
                setIsLoading(false);
                e.target.disabled = false;
                navigate(`/chat?uid=${res.data}`);
            })
            .catch(error =>{
                console.error(error)
                setIsLoading(false);
                e.target.disabled = false;
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
                        <form ref={loginInForm} className="logInForm"> 
                            <section className="logInInputSection">
                                <WelcomeInput className="usernameInput" placeholder="Username"/>
                                <WelcomeInput className="passwordInput" placeholder="Password" type="password"/>
                            </section>
                            <button className="btnWelcomeForm mouseCursorHoverPointer btnLogin" type="submit" onClick={loginFormSubmit}>
                                {isLoading ? '...' : 'Login'}
                            </button>
                        </form>
                        <section className="signUpTxt">Don't have an account?<p onClick={goToSignupPanel} className="mouseCursorHoverPointer"> Sign Up</p></section>
                    </section>
                    <section ref={signUpForm} className="signUpPanel">
                        <header className="signUpHeader">
                            <div onClick={goToLoginPanel} className="btnBack2login">Back to Login</div>
                            <section className="subSignupHeader" onClick={goToAvatarPanel}>
                                <section id="avatarDisplay" className="profilePicContainer">
                                    <div className="avatarImgSignup" ref={avatarRef} />
                                    
                                    <div className="imgPen"/>
                                    <img loading="lazy" className="infoTextImg" alt="infotext" src={imgInfoArrowText}/>
                                </section>
                            </section>
                        </header>

                        <div className="welcomeTitle signup">Make Your Own Account</div>
                        <form className="signupForm">
                            <section className="signupInputSection">
                                <WelcomeInput placeholder="Your Name"/>
                                <WelcomeInput placeholder="Username"/>
                                <WelcomeInput placeholder="Password" type="password"/>
                            </section>
                            <button className="btnWelcomeForm mouseCursorHoverPointer createProfileButton" type="submit" onClick={signupFormSubmit}>
                                {isLoading ? '...' : 'Create'}
                            </button>
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