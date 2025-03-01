import './App.css';
import { TodoWrapper } from './components/TodoWrapper.jsx';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";
import AuthProvider from "./context/AuthContext.jsx";

function App() {
  return (
    // <AuthContext.Provider value={{name:"sdasd"}}>
    <AuthProvider>
      <div className="App" style={{ backgroundColor: "black" }}>
        <Router>
          <Routes>
            <Route path="/" exact element={<TodoWrapper />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
      
    // </AuthContext.Provider>
      

  );
}

export default App;
