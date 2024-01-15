import {HashRouter as Router, Route, Routes} from "react-router-dom";
import JoinRoute from "./components/WelcomePage components/joinPage.js"
import ChatRoute from "./components/ChatRoom components/chatPage.js"

import "./styles/mainStyle.css"


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<JoinRoute/> }/>
        <Route path="/chat" element={<ChatRoute/> }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
