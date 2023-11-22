import {HashRouter as Router, Route, Routes} from "react-router-dom";
import JoinRoute from "./components/joinPage"

import "./styles/mainStyle.css"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<JoinRoute/> }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
