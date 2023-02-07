import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Students from "./components/Students";
import Home from "./components/Home";

export default function App() {
  const [students, setStudents] = useState([]);

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  if (mode === "light") {
    const css = require("./Light.css");
  } else {
    const css = require("./Dark.css");
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:8080/students");
        const data = await res.json();
        setStudents(data?.students);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStudents();
  }, [mode]);

  console.log("STUDENTS: ", students);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleMode={toggleMode}
              setMode={setMode}
              mode={mode}
              students={students}
            />
          }
        />
        <Route path="/:name" element={<Students students={students} />} />
      </Routes>
    </div>
  );
}
