import React, { useState } from "react";
import Homepage from "./component/homepage/homepage";
import Register from "./component/Registration/Registration";
import Login from "./component/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage loginUser={loginUser} setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
