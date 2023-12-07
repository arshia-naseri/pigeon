import {HashRouter as Router, Route, Routes} from "react-router-dom";
import JoinRoute from "./components/Join component/joinPage"
import ChatRoute from "./components/Chat component/chatPage"

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
