import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "info" });
  const [profileName, setProfileName] = useState(
    () => localStorage.getItem("profileName") || "",
  );

  const showAlert = (message, type = "info") => {
    setAlert({ message, type });
  };

  const handleAuthSuccess = (name) => {
    setProfileName(name);
    localStorage.setItem("profileName", name);
  };

  return (
    <NoteState>
      <Router>
        <Navbar profileName={profileName} />
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: "", type: "info" })}
        />
        <main className="app-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={
                <Login
                  showAlert={showAlert}
                  onAuthSuccess={handleAuthSuccess}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup
                  showAlert={showAlert}
                  onAuthSuccess={handleAuthSuccess}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </NoteState>
  );
}

export default App;
